import { Tag } from 'js/types/Tag'
import { AppAction, AppState } from 'js/types/redux'

export type TagsState = {
  activeTags: Tag[]
}

export const initialState: TagsState = {
  activeTags: [],
}

export const actions = {
  addTag: (tag: Tag) => ({
    type: 'ADD_TAG',
    payload: tag,
  }),
  removeTag: (guid: string) => ({
    type: 'REMOVE_TAG',
    payload: guid,
  }),
}

export function reducer(state: TagsState = initialState, action: AppAction) {
  switch (action.type) {
    // TODO: Implement reducer
    case 'ADD_TAG':
    case 'REMOVE_TAG':
    default:
      return state
  }
}

export const getTags = (state: AppState) => state.tags.activeTags
