import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const username = process.env.GH_USERNAME || process.env.GITHUB_ACTOR || '99ch';
const token = process.env.GH_STATS_TOKEN || process.env.GITHUB_TOKEN;

if (!token) {
  console.error('Missing GitHub token. Provide GH_STATS_TOKEN or rely on GITHUB_TOKEN in Actions.');
  process.exit(1);
}

const apiEndpoint = 'https://api.github.com/graphql';

async function graphqlRequest(query, variables = {}) {
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}\n${text}`);
  }

  const payload = await response.json();
  if (payload.errors) {
    throw new Error(`GitHub API returned errors: ${JSON.stringify(payload.errors, null, 2)}`);
  }
  return payload.data;
}

function getDateBoundaries() {
  const to = new Date();
  const from = new Date();
  from.setUTCDate(from.getUTCDate() - 365);
  return { from: from.toISOString(), to: to.toISOString() };
}

async function fetchUserSummary() {
  const { from, to } = getDateBoundaries();
  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        name
        login
        createdAt
        followers { totalCount }
        following { totalCount }
        repositories(privacy: PUBLIC) { totalCount }
        repositoriesContributedTo(contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY], privacy: PUBLIC, includeUserRepositories: true) { totalCount }
        pullRequests(states: MERGED) { totalCount }
        issues(states: CLOSED) { totalCount }
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const data = await graphqlRequest(query, { login: username, from, to });
  return data.user;
}

async function fetchRepositories() {
  const repositories = [];
  let hasNextPage = true;
  let cursor = null;

  while (hasNextPage) {
    const query = `
      query ($login: String!, $cursor: String) {
        user(login: $login) {
          repositories(first: 100, after: $cursor, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false, orderBy: { field: PUSHED_AT, direction: DESC }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              name
              url
              stargazerCount
              primaryLanguage {
                name
                color
              }
              languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
              updatedAt
            }
          }
        }
      }
    `;

    const data = await graphqlRequest(query, { login: username, cursor });
    const { repositories: repoData } = data.user;
    repositories.push(...repoData.nodes);
    hasNextPage = repoData.pageInfo.hasNextPage;
    cursor = repoData.pageInfo.endCursor;
  }

  return repositories;
}

function flattenContributionDays(calendar) {
  return calendar.weeks.flatMap((week) => week.contributionDays);
}

function computeStreaks(days) {
  const sorted = [...days].sort((a, b) => new Date(a.date) - new Date(b.date));
  let longest = { length: 0, start: null, end: null };
  let current = { length: 0, start: null };

  for (const day of sorted) {
    if (day.contributionCount > 0) {
      if (current.length === 0) {
        current.start = day.date;
      }
      current.length += 1;
      if (current.length > longest.length) {
        longest = { length: current.length, start: current.start, end: day.date };
      }
    } else {
      current = { length: 0, start: null };
    }
  }

  // Current streak: iterate from latest backwards until zero contribution day appears
  let currentStreakLength = 0;
  let currentStreakStart = null;
  let currentStreakEnd = null;
  const reversed = [...sorted].reverse();
  for (let i = 0; i < reversed.length; i += 1) {
    const day = reversed[i];
    if (day.contributionCount > 0) {
      currentStreakLength += 1;
      currentStreakEnd = currentStreakEnd || day.date;
      currentStreakStart = day.date;
    } else {
      break;
    }
  }

  return {
    current: {
      length: currentStreakLength,
      start: currentStreakLength ? currentStreakStart : null,
      end: currentStreakLength ? currentStreakEnd : null
    },
    longest
  };
}

function buildLanguageBreakdown(repositories) {
  const totals = new Map();
  for (const repo of repositories) {
    const edges = repo.languages?.edges || [];
    for (const edge of edges) {
      const lang = edge.node?.name;
      if (!lang) continue;
      const color = edge.node.color || '#94a3b8';
      const existing = totals.get(lang) || { bytes: 0, color };
      existing.bytes += edge.size;
      existing.color = color;
      totals.set(lang, existing);
    }
  }

  const totalBytes = Array.from(totals.values()).reduce((sum, item) => sum + item.bytes, 0) || 1;
  const breakdown = Array.from(totals.entries())
    .map(([name, { bytes, color }]) => ({
      name,
      color,
      bytes,
      share: Number((bytes / totalBytes).toFixed(4))
    }))
    .sort((a, b) => b.bytes - a.bytes);

  return breakdown.slice(0, 8);
}

function pickTopRepositories(repositories) {
  return repositories
    .filter((repo) => repo.stargazerCount > 0)
    .sort((a, b) => b.stargazerCount - a.stargazerCount)
    .slice(0, 6)
    .map((repo) => ({
      name: repo.name,
      url: repo.url,
      stars: repo.stargazerCount,
      language: repo.primaryLanguage?.name || 'n/a'
    }));
}

async function main() {
  console.log(`Fetching GitHub insights for ${username}...`);
  const [summary, repositories] = await Promise.all([
    fetchUserSummary(),
    fetchRepositories()
  ]);

  const contributions = flattenContributionDays(summary.contributionsCollection.contributionCalendar);
  const streaks = computeStreaks(contributions);
  const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazerCount, 0);
  const languageBreakdown = buildLanguageBreakdown(repositories);
  const topRepositories = pickTopRepositories(repositories);
  const recentContributions = contributions.slice(-28);

  const payload = {
    generatedAt: new Date().toISOString(),
    profile: {
      login: summary.login,
      name: summary.name,
      followers: summary.followers.totalCount,
      following: summary.following.totalCount,
      publicRepos: summary.repositories.totalCount,
      joinedOn: summary.createdAt
    },
    totals: {
      contributionsLast365: summary.contributionsCollection.contributionCalendar.totalContributions,
      currentStreak: streaks.current,
      longestStreak: streaks.longest,
      mergedPullRequests: summary.pullRequests.totalCount,
      issuesClosed: summary.issues.totalCount,
      reposContributedTo: summary.repositoriesContributedTo.totalCount,
      totalStars
    },
    languages: languageBreakdown,
    topRepositories,
    recentContributions
  };

  const dataDir = path.resolve(__dirname, '../assets/data');
  const outputPath = path.join(dataDir, 'github-stats.json');
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Wrote stats to ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
