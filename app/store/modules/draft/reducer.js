import * as types from './actionTypes'
import uniq from 'ramda/src/uniq'
import remove from 'ramda/src/remove'
import indexOf from 'ramda/src/indexOf'

export const initialState = {
  guid: null,
  name: '',
  desc: '',
  href: '',
  tags: [],
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.EDIT_NAME: {
      return {
        ...state,
        name: action.payload.name,
      }
    }
    case types.EDIT_HREF: {
      return {
        ...state,
        href: action.payload.href,
      }
    }
    case types.EDIT_DESC: {
      return {
        ...state,
        desc: action.payload.desc,
      }
    }
    case types.ADD_TAG: {
      return {
        ...state,
        tags: uniq([...state.tags, action.payload.tag]),
      }
    }
    case types.REMOVE_TAG: {
      const newTags = remove(
        indexOf(action.payload.tag, state.tags),
        1,
        state.tags
      )
      return {
        ...state,
        tags: newTags,
      }
    }
    case types.IMPORT: {
      return {
        ...action.payload.bookmark,
      }
    }
    case types.SET_GUID: {
      return {
        ...state,
        guid: action.payload.guid,
      }
    }
    case types.CLEAR:
      return initialState
    default:
      return state
  }
}
