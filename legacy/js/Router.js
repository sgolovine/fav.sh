import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

/** Page Imports */
import MainPage from 'containers/MainPage'
import AddPage from 'containers/AddPage'
import EditPage from 'containers/EditPage'
import SyncPage from 'containers/SyncPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/add" component={AddPage} />
        <Route exact path="/edit" component={EditPage} />
        <Route exact path="/sync" component={SyncPage} />
        <Route component={MainPage} />
      </Switch>
    </BrowserRouter>
  )
}
