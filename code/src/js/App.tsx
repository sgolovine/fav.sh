import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '~/store/store'
import { DevTools } from '~/store/DevTools'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from '~/screens/Router'

export const Bootstrap = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </PersistGate>
    </Provider>
  )
}
