import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '~/store/store'
import { DevTools } from '~/store/DevTools'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MainScreen } from '~/screens/MainScreen'
import { Categories } from '~/screens/Categories'
import { AddScreen } from '~/screens/AddScreen'
import { Router } from '@reach/router'

const NewRouter = () => {
  return (
    <Router>
      {/* <MainScreen path="/" /> */}
      {/* <AddScreen path="/add" /> */}
      <Categories path="/categories" />
    </Router>
  )
}

export const Bootstrap = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NewRouter />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </PersistGate>
    </Provider>
  )
}
