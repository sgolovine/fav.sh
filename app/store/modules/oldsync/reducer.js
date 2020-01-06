import * as types from './actionTypes'

export const initialState = {
  authenticated: false,
  restoreLoading: false,
  restoreError: null,
  backupDetails: {},
  lastBackup: new Date().toString(),
  backupLoading: false,
  tokenLoading: false,
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOKEN_LOADING: {
      return {
        ...state,
        tokenLoading: true,
        authenticated: false,
      }
    }
    case types.TOKEN_LOAD_SUCCESS: {
      return {
        ...state,
        tokenLoading: false,
        token: action.payload.token,
        authenticated: true,
      }
    }
    case types.TOKEN_LOAD_FAIL: {
      return {
        ...state,
        tokenLoading: false,
        authenticated: false,
      }
    }
    case types.UPDATE_LOADING:
    case types.BACKUP_LOADING: {
      return {
        ...state,
        backupLoading: true,
      }
    }
    case types.UPDATE_SUCCESS:
    case types.BACKUP_SUCCESS: {
      return {
        ...state,
        backupLoading: false,
        backupDetails: {
          location: action.payload.location,
          lastBackup: new Date().toString(),
        },
      }
    }
    case types.UPDATE_FAIL:
    case types.BACKUP_FAIL: {
      return {
        ...state,
        backupLoading: false,
      }
    }
    case types.RESTORE_LOADING: {
      return {
        ...state,
        restoreLoading: true,
      }
    }
    case types.RESTORE_SUCCESS: {
      return {
        ...state,
        restoreLoading: false,
      }
    }
    case types.RESTORE_FAIL: {
      return {
        ...state,
        restoreLoading: false,
      }
    }
    case types.UPDATE_BACKUP_DETAILS: {
      return {
        ...state,
        backupDetails: {
          ...state.backupDetails,
          ...action.payload.details,
        },
      }
    }
    case types.DISCONNECT: {
      return {
        ...state,
        backupDetails: {},
      }
    }
    case types.LOGOUT: {
      return {
        authenticated: false,
      }
    }
    default:
      return state
  }
}
