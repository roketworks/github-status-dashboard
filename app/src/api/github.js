let accessToken;

function executeQuery(query, variables) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  .then(response => response.json())
}

export function setAccessToken(newAccessToken) {
  accessToken = newAccessToken;
}

export async function getRepository(owner, name) {
  const query =
  `query GetRepository($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
          id
          nameWithOwner
      }
  }`;

  const result = await executeQuery(query, { owner, name });
  return result.data.repository;
}

export async function getLatestStatus(ids) {
  const query =
  `query GetNodes($ids: [ID!]!) {
    nodes(ids: $ids) {
        ... on Repository {
            id
            name
            nameWithOwner
            ref(qualifiedName: "master") {
                id
                name
                target {
                    ... on Commit {
                        id
                        history(first: 10) {
                            edges {
                                node {
                                    message
                                    status {
                                        state
                                        contexts {
                                            id
                                            state
                                            context
                                            description
                                            targetUrl
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}`;

  const result = await executeQuery(query, { ids });
  return result.data.nodes;
}
