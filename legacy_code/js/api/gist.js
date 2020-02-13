import Github from 'github-api'

export function createGist(token, payload) {
  const gh = new Github({ token })
  const gist = gh.getGist()
  return gist.create(payload)
}

export function updateGist(token, gistId, payload) {
  const gh = new Github({ token })
  const gist = gh.getGist(gistId)
  return gist.update(payload)
}

export function getGist(gistId) {
  const gh = new Github()
  const gist = gh.getGist(gistId)
  return gist.read()
}

export function getGistAnonymously(gistId) {
  const gh = new Github()
  const gist = gh.getGist(gistId)
  return gist.read()
}
