import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'

export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-p"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
    fluid
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)
