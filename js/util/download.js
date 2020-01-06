/**
 * Allows for downloading of bookmarks in redux store
 * to a json file
 */
export function downloadObjectAsJson(
  exportObj,
  exportName
) {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(exportObj, null, 2)
  )}`
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute(
    'download',
    `${exportName}.json`
  )
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
