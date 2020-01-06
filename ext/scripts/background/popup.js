/** Initialize windowAppId without a set WINDOW_ID */
let appWindowId = chrome.windows.WINDOW_ID_NONE
const CONTEXT_MENU_ID = 'fav-extension'
/**
 * Popup dimensions
 */
const POPUP_HEIGHT = 800
const POPUP_WIDTH = 1500

/**
 * Helper function that insures
 * that only a single window stays
 * open at a time
 */
function closeIfExist() {
  if (appWindowId > 0) {
    chrome.windows.remove(appWindowId)
    appWindowId = chrome.windows.WINDOW_ID_NONE
  }
}

/**
 * When the user clicks the context menu item
 * This function will open the app in a popup
 */
function popAppWindow(type) {
  closeIfExist()
  const options = {
    type: 'popup',
    left: 100,
    top: 100,
    height: POPUP_HEIGHT,
    width: POPUP_WIDTH,
  }
  if (type === 'open') {
    options.url = 'index.html'
    chrome.windows.create(options, win => {
      appWindowId = win.id
    })
  }
}

/**
 * Create out context menu handler
 */
chrome.contextMenus.onClicked.addListener(event => {
  if (event.menuItemId === CONTEXT_MENU_ID) {
    popAppWindow('open')
  }
})

/**
 * Now create the context menu entry
 */
chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: 'Bookmarks',
  contexts: ['all'],
})
