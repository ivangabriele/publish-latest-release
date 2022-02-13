import core from '@actions/core'
import github from '@actions/github'

const { GITHUB_TOKEN } = process.env

try {
  if (GITHUB_TOKEN === undefined) {
    throw new Error(
      'You forgot to set the `GITHUB_TOKEN` environment variable.\n' +
        'Re-check your setup: https://github.com/ivangabriele/clamav-desktop#usage.',
    )
  }

  const { context } = github
  const octokit = github.getOctokit(GITHUB_TOKEN)

  const listReleasesResponse = await octokit.rest.repos.listReleases({
    ...context.repo,
    per_page: 10,
  })

  if (listReleasesResponse.status !== 200) {
    throw new Error(`Received a non-200 status code while listing releases: ${listReleasesResponse.status}.`)
  }

  const releases = listReleasesResponse.data

  if (releases.length === 0) {
    core.info('No release available.')

    process.exit(0)
  }

  const maybeDrafRelease = releases.find(({ draft }) => draft === true)
  if (maybeDrafRelease === undefined) {
    core.info('No release available.')

    process.exit(0)
  }

  await octokit.rest.repos.updateRelease({
    ...context.repo,
    draft: false,
    release_id: maybeDrafRelease.id,
  })
} catch (e) {
  core.setFailed(e.message)
}
