import { combineReducers, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { localStorage } from 'redux-persist-webextension-storage'
import { DevTools } from './DevTools'
import { AppState } from '../types/redux'
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

const enhancer = compose(DevTools.instrument())

export function configureStore() {
  const store = createStore(persistedReducer, appInitialState, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}
