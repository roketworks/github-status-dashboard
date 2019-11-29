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
