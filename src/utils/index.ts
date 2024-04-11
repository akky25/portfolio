interface ContributionData {
  date: string;
  contributionCount: number;
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsCollection {
  contributionCalendar: {
    weeks: ContributionWeek[];
  };
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: ContributionsCollection;
    };
  };
}

export async function fetchGitHubContributions(
  username: string,
  daysAgo: number,
): Promise<ContributionData[]> {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - daysAgo);

  const query = `
  query {
    user(login: "${username}") {
      contributionsCollection(from: "${startDate.toISOString()}", to: "${endDate.toISOString()}") {
        contributionCalendar {
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

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 24 * 60 * 60 },
    });

    const responseBody: GitHubResponse = await response.json();
    const weeks =
      responseBody.data.user.contributionsCollection.contributionCalendar.weeks;
    const contributions: ContributionData[] = weeks.flatMap(
      (week) => week.contributionDays,
    );
    return contributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions", error);
    return [];
  }
}
