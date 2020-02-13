import * as types from './actionTypes'

export function addBookmark(bookmark) {
  return {
    type: types.ADD,
    payload: { bookmark },
  }
}

export function deleteBookmark(guid) {
  return {
    type: types.DELETE,
    payload: { guid },
  }
}

export function restoreBookmarks(bookmarks) {
  return {
    type: types.RESTORE,
    payload: { bookmarks },
  }
}
