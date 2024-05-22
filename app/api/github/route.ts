 
import { NextRequest, NextResponse } from 'next/server';
import { GraphqlResponseError, graphql, type GraphQlQueryResponseData } from '@octokit/graphql';

import siteMetadata from '@/data/siteMetadata';

export async function GET(req : NextRequest) {
  let repo = req.nextUrl.searchParams.get('repo');

  if (!repo) {
    return NextResponse.json({ message: 'Missing repo query param' }, { status: 400 });
  }

  if (!process.env.GITHUB_API_TOKEN) {
    return NextResponse.json({ message: 'Missing `GITHUB_API_TOKEN` env variable' }, { status: 500 });
  }

  let owner = siteMetadata.socialAccounts.github;
  if (repo.includes('/')) {
    [owner, repo] = repo.split('/');
  }

  try {
    const { repository }: GraphQlQueryResponseData = await graphql(
      `
        query repository($owner: String!, $repo: String!) {
          repository(owner: $owner, name: $repo) {
            stargazerCount
            description
            homepageUrl
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                node {
                  color
                  name
                }
              }
            }
            name
            nameWithOwner
            url
            forkCount
            repositoryTopics(first: 20) {
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      {
        owner,
        repo,
        headers: {
          authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
      }
    );

    repository.languages = repository.languages.edges.map((edge) => {
      return {
        color: edge.node.color,
        name: edge.node.name,
      };
    });

    repository.repositoryTopics = repository.repositoryTopics.edges.map((edge) => edge.node.topic.name);

    return NextResponse.json({ message: 'ok', repository });
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      return NextResponse.json({ message: error.errors?.[0].message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Unable to fetch repo data' + error?.toString()}, { status: 500 });
  }
}
