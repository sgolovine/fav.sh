import * as types from './actionTypes'

export function tokenLoading() {
  return {
    type: types.TOKEN_LOADING,
  }
}

export function tokenLoadSuccess(token) {
  return {
    type: types.TOKEN_LOAD_SUCCESS,
    payload: { token },
  }
}

export function tokenLoadFail() {
  return {
    type: types.TOKEN_LOAD_FAIL,
  }
}

export function backupLoading() {
  return {
    type: types.BACKUP_LOADING,
  }
}

export function backupSuccess(location) {
  return {
    type: types.BACKUP_SUCCESS,
    payload: { location },
  }
}

export function backupFail() {
  return {
    type: types.BACKUP_FAIL,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}

export function restoreLoading() {
  return {
    type: types.RESTORE_LOADING,
  }
}

export function restoreSuccess(bookmarks) {
  return {
    type: types.RESTORE_SUCCESS,
    payload: { bookmarks },
  }
}

export function restoreFail() {
  return {
    type: types.RESTORE_FAIL,
  }
}

export function updateBackupDetails(details) {
  return {
    type: types.UPDATE_BACKUP_DETAILS,
    payload: { details },
  }
}
export function updateLoading() {
  return {
    type: types.UPDATE_LOADING,
  }
}
export function updateSuccess(location) {
  return {
    type: types.UPDATE_SUCCESS,
    payload: { location },
  }
}

export function updateFail() {
  return {
    type: types.UPDATE_FAIL,
  }
}

export function disconnect() {
  return {
    type: types.DISCONNECT,
  }
}
