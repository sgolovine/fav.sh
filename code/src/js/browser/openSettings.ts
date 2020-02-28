// This will open a new window that
// Will hold the user settings

export function openSettingsWindow() {
  browser.windows.create({
    url: browser.runtime.getURL('/entry/settings.html'),
    type: 'popup',
  })
}
