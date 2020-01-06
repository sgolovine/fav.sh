import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import reducer, { initialState, whitelist } from './reducer'
import DevTools from '../containers/DevTools'
import createChromeStorage from 'redux-persist-chrome-storage'

const storage = createChromeStorage(window.chrome, 'local')

const persistConfig = {
  key: 'localStorage',
  storage,
  whitelist,
}

const persistedReducer = persistReducer(
  persistConfig,
  reducer
)

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

function configureStore() {
  const store = createStore(
    persistedReducer,
    initialState,
    enhancer
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
