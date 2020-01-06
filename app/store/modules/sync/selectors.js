export const getAuthenticated = state => !!state.sync.token

export const getLoading = state => state.sync.loading

export const getError = state => state.sync.error

export const getToken = state => state.sync.token

export const getDetails = state => state.sync.backupDetails
