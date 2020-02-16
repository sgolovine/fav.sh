import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'js/store/store'
import { DevTools } from 'js/store/DevTools'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return <p>Hello World</p>
}

export const Bootstrap = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </PersistGate>
    </Provider>
  )
}
