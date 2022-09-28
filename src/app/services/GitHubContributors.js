import { FETCH_PARAMETERS } from 'services/defaultFetchParameters';

export async function getGitHubContributors({
  owner = 'facebook',
  repository = 'react',
  perPage = 25,
} = {}) {
  return fetch(
    `https://api.github.com/repos/${owner}/${repository}/contributors?per_page=${perPage}`,
    {
      ...FETCH_PARAMETERS,
    },
  ).then((response) => response.json());
}
