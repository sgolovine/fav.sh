import { Bookmark } from 'js/types/Bookmark'
import { AppAction, AppState } from 'js/types/redux'

export type BookmarkState = {
  [guid: string]: Bookmark
}

export const initialState: BookmarkState = {}

export const actions = {
  add: (bookmark: Bookmark) => ({
    type: 'ADD_BOOKMARK',
    payload: bookmark,
  }),
  remove: (guid: string) => ({
    type: 'REMOVE_BOOKMARK',
    payload: guid,
  }),
}

export function reducer(
  state: BookmarkState = initialState,
  action: AppAction
) {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        [action.payload.guid]: action.payload,
      }
    case 'REMOVE_BOOKMARK':
    // TODO: Implement this function
    default:
      return state
  }
}

export const getBookmarks = (state: AppState) => state.bookmarks

export const getBookmark = (state: AppState, guid: string) =>
  state.bookmarks[guid]
