export const getToken = state => state.sync.token

export const getTokenLoading = state =>
  state.sync.tokenLoading

export const isAuthenticated = state =>
  state.sync.authenticated

export const getLocation = state =>
  (state.sync.backupDetails &&
    state.sync.backupDetails.location) ||
  null

export const getBackupDetails = state =>
  state.sync.backupDetails

export const getCanUpdate = state => !!state.sync
