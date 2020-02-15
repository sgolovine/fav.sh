import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/createStore'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const Devtools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-p"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
    fluid
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)

export const Bootstrap = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Devtools />
      {children}
    </Provider>
  )
}
