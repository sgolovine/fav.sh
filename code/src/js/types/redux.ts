import { InitialState as ModuleState } from '../store/module'

export type AppAction = {
  type: string
  payload?: any
}

export type AppState = {
  module: ModuleState
}
