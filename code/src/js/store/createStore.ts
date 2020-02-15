// General Imports
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { localStorage } from 'redux-persist-webextension-storage'
// Types
import { AppState } from '../types/redux'

// Inital State & Reducers
import { initialState as moduleState, reducer as moduleReducer } from './module'

const persistConfig = {
  key: 'localStorage',
  storage: localStorage,
}

const appInitialState: AppState = {
  module: moduleState,
}

const rootReducer = combineReducers({
  module: moduleReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// TODO:
// Finish store persistence
// Finish devtools integration

export const store = createStore(rootReducer, appInitialState)
