import { actionTypes } from './reducer'

export function login() {
  return {
    type: actionTypes.LOGIN,
  }
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  }
}

export function setLoading(loadState) {
  return {
    type: actionTypes.SET_LOADING,
    payload: { loadState },
  }
}

export function setError(error) {
  return {
    type: actionTypes.SET_ERROR,
    payload: { error },
  }
}

export function clearError() {
  return {
    type: actionTypes.CLEAR_ERROR,
  }
}

export function setToken(token) {
  return {
    type: actionTypes.SET_TOKEN,
    payload: { token },
  }
}

export function setBackupDetails(details) {
  return {
    type: actionTypes.SET_DETAILS,
    payload: { details },
  }
}

export function clearBackupDetails() {
  return {
    type: actionTypes.CLEAR_DETAILS,
  }
}
