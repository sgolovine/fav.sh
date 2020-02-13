const baseURL = 'https://github.com'
const path = 'login/oauth/authorize'
const clientId = '7fb2c68496e3fbc3f546'
const scope = 'gist'
const redirect = 'https://chromeauth.fav.sh/'

const authUrl = `${baseURL}/${path}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirect}`

function toggleLogin() {
  chrome.tabs.create({
    url: authUrl,
  })
}

chrome.runtime.onMessage.addListener(message => {
  if (message.event === 'login') {
    toggleLogin()
  }
})
