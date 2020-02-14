/**
 * Basic module to setup the pattern for redux
 * Delete this once we create more modules
 */

import { AppAction } from '../types/redux'

export type InitialState = {
  foo: string
}

export const initialState: InitialState = {
  foo: 'bar',
}

export const actions = {
  makeBar: () => ({
    type: 'MAKE_BAR',
    payload: 'bar',
  }),
}

export function reducer(state: InitialState = initialState, action: AppAction) {
  switch (action.type) {
    case 'MAKE_BAR': {
      return {
        ...state,
        foo: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
