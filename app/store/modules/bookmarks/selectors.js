import { extractTags } from 'util/tags'

export const getBookmarks = state => state.bookmarks

export const getAllTags = state => {
  const { bookmarks } = state
  return extractTags(bookmarks)
}

export function getBookmark(state, guid) {
  return state.bookmarks.bookmarks[guid]
}
