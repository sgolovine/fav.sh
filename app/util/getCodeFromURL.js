export function getCodeFromURL(callbackURL) {
  const url = new URL(callbackURL)
  const { search } = url
  return search.replace('?code=', '')
}
