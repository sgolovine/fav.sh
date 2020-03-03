// Because the settings page does not
// connect to the redux store, we cannot simply
// get the bookmarks from the redux store like we usually do
// However because the bookmrks are stored in the extensions local storage
// We can grab the raw storage, deserialize it and then take the bookmarks
// out and provide them to the user for backup

import { storageKey } from '~/store/store'

export async function getBookmarksFromStorage() {
  const key = `persist:${storageKey}`
  return new Promise((resolve, reject) => {
    const onSuccess = (item: any) => {
      console.log(item)
      console.log(item[key])
      // const deserializedStore = JSON.parse(content[key])
      // const deserializedBookmarks = JSON.parse(deserializedStore.bookmarks)
      // resolve(deserializedBookmarks)
    }

    const onError = () => reject()

    browser.storage.local.get(key).then(onSuccess, onError)
  })
}
