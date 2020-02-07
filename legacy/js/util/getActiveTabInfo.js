/**
 * Given the current active window
 * This function will return the required metadata
 * from the currently active tab
 */

export function getActiveTabInfo(window) {
  if (window && window.tabs) {
    // We should only ever have one
    const activeTab = window.tabs.filter(
      tab => tab.active
    )[0]
    // Return only relevant info
    return {
      title: activeTab.title,
      url: activeTab.url,
    }
  }
  return null
}
