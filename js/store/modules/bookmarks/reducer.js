import omit from 'ramda/src/omit'
import * as types from './actionTypes'

export const initialState = {}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD: {
      const { bookmark } = action.payload
      return {
        ...state,
        [bookmark.guid]: bookmark,
      }
    }
    case types.DELETE: {
      const { guid } = action.payload
      return omit([guid], state)
    }
    case types.RESTORE: {
      return {
        ...action.payload.bookmarks,
      }
    }
    default:
      return state
  }
}
