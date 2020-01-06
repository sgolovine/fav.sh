export const GIST_FILENAME = 'fav_bookmarks.json'

const baseURL = 'https://github.com'
const path = 'login/oauth/authorize'
const devClientId = '7fb2c68496e3fbc3f546'
const prodClientId = '3b4b685ccc14d6b13b8b'
const scope = 'gist'
const redirect = chrome.identity.getRedirectURL()

const clientId =
  process.env.NODE_ENV === 'development'
    ? devClientId
    : prodClientId

export const GATEKEEPER_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://fav-sh-chrome.herokuapp.com/authenticate'
    : 'https://fav-sh-chrome-prod.herokuapp.com/authenticate'

export const authURL = `${baseURL}/${path}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirect}`
