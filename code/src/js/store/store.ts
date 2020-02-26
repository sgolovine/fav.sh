import { combineReducers, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import { DevTools } from './DevTools'
import { AppState } from '~/types/redux'

import {
  initialState as bookmarksState,
  reducer as bookmarksReducer,
} from './modules/bookmarks'

import {
  initialState as searchState,
  reducer as searchReducer,
} from './modules/search'

import {
  initialState as syncState,
  reducer as syncReducer,
} from './modules/sync'

import {
  initialState as tagsState,
  reducer as tagsReducer,
} from './modules/tags'

import {
  initialState as navigationState,
  reducer as navigationReducer,
} from './modules/navigation'

import {
  initialState as editingState,
  reducer as editingReducer,
} from './modules/editing'

const persistConfig = {
  key: 'localStorage',
  storage: localStorage,
}

const appInitialState: AppState = {
  bookmarks: bookmarksState,
  search: searchState,
  sync: syncState,
  tags: tagsState,
  navigation: navigationState,
  editing: editingState,
}

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  search: searchReducer,
  sync: syncReducer,
  tags: tagsReducer,
  navigation: navigationReducer,
  editing: editingReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = compose(DevTools.instrument())

export function configureStore() {
  const store = createStore(persistedReducer, appInitialState, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}
