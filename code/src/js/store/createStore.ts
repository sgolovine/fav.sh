// General Imports
import { combineReducers, createStore } from 'redux'

// Types
import { AppState } from '../types/redux'

// Inital State & Reducers
import { initialState as moduleState, reducer as moduleReducer } from './module'

const appInitialState: AppState = {
  module: moduleState,
}

const rootReducer = combineReducers({
  module: moduleReducer,
})

export const store = createStore(rootReducer, appInitialState)
