import { combineReducers } from 'redux'

import ui, { uiState } from './modules/ui'
import toast, { toastState } from './modules/toast'
import tags, { tagsState } from './modules/tags'
import {
  reducer as sync,
  initialState as syncState,
} from './modules/sync'

import {
  reducer as bookmarks,
  initialState as bookmarksState,
} from './modules/bookmarks'

import {
  reducer as draft,
  initialState as draftState,
} from './modules/draft'

import {
  reducer as search,
  initialState as searchState,
} from './modules/search'

export const initialState = {
  bookmarks: bookmarksState,
  ui: uiState,
  toast: toastState,
  draft: draftState,
  tags: tagsState,
  sync: syncState,
  search: searchState,
}

export default combineReducers({
  bookmarks,
  ui,
  toast,
  draft,
  tags,
  sync,
  search,
})

export const whitelist = ['bookmarks', 'sync']
