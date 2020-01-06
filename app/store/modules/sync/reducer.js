export const actionTypes = {
  LOGOUT: 'sync/LOGOUT',
  SET_LOADING: 'sync/SET_LOADING',
  SET_ERROR: 'sync/SET_ERROR',
  CLEAR_ERROR: 'sync/CLEAR_ERROR',
  SET_TOKEN: 'sync/SET_TOKEN',
  SET_DETAILS: 'sync/SET_DETAILS',
  CLEAR_DETAILS: 'sync/CLEAR_DETAILS',
  BACKUP_LOADING: 'sync/BACKUP_LOADING',
  BACKUP_SUCCESS: 'sync/BACKUP_SUCCESS',
  BACKUP_FAILURE: 'sync/BACKUP_FAILURE',
}

export const initialState = {
  loading: false,
  error: null,
  token: null,
  backupDetails: {},
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loadState,
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      }
    case actionTypes.SET_DETAILS: {
      return {
        ...state,
        backupDetails: action.payload.details,
      }
    }
    case actionTypes.CLEAR_DETAILS: {
      return {
        ...state,
        backupDetails: {},
      }
    }
    case actionTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
