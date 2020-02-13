import { getGithubToken } from 'api/gatekeeper'
import { createGist, getGist, updateGist } from 'api/gist'
import { toastShow } from 'store/modules/toast'
import { restoreBookmarks } from 'store/modules/bookmarks'
import * as actions from './actions'
/**
 * @param {string} authCode
 *
 * authorization code that
 * comes back from Auth
 */
export function login(authCode, silent = false) {
  return dispatch => {
    // Clear any errors and kick off loading
    dispatch(actions.clearError())
    dispatch(actions.setLoading(true))

    // Reach out to gatekeeper to get the token
    getGithubToken(authCode).then(resp => {
      /**
       * If our response contains the code
       * 1. Set the token
       * 2. Set loading to false
       * 3. Dispatch a toast to indicate success
       */
      if (resp.data.token) {
        dispatch(actions.setToken(resp.data.token))
        dispatch(actions.setLoading(false))
        if (!silent) {
          dispatch(toastShow('Successfully Logged In'))
        }
      }

      /**
       * If the response is not successful
       * 1. Set loading to false
       * 2. Set error to the returned error
       * 3. Dispatch toast to indicate failure
       */
      if (resp.data.error) {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(resp.data.error))
        if (!silent) {
          dispatch(toastShow('Error Logging In'))
        }
      }
    })
  }
}

/**
 *
 * @param {string} filename: backup filename
 * @param {string} description: backup description
 * @param {boolean} isPublic: public/private backup
 */

export function createBackup(
  filename,
  description,
  isPublic
) {
  const defaultFilename = 'bookmarks'
  return (dispatch, getState) => {
    dispatch(actions.clearError())
    dispatch(actions.setLoading(true))
    const { bookmarks, sync } = getState()

    const gist = {
      files: {
        [filename || defaultFilename]: {
          content: JSON.stringify(bookmarks),
        },
      },
      description: description || 'Fav.sh bookmarks',
      isPublic,
    }
    createGist(sync.token, gist)
      .then(resp => {
        const { data } = resp
        const backupDetails = {
          description: gist.description,
          isPublic: gist.isPublic,
          gistId: data.id,
          url: data.html_url,
          filename: filename || defaultFilename,
        }
        dispatch(actions.setLoading(false))
        dispatch(actions.setBackupDetails(backupDetails))
        dispatch(toastShow('Backup created successfully'))
      })
      .catch(err => {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(err))
        dispatch(
          toastShow(
            'There was an error creating the backup'
          )
        )
      })
  }
}

/**
 *
 * @param {string} gistID: the ID of the backup
 */
export function restoreBackup(gistID) {
  return dispatch => {
    dispatch(actions.clearError())
    dispatch(actions.setLoading(true))
    getGist(gistID)
      .then(resp => {
        /**
         * Destructure the files from the rest of the response
         */
        const { files } = resp.data
        /**
         * Get the filename of the first key
         *
         * Right now our backups save to a single file in a gist and thus
         * the application for now only supports a single gist in a file
         *
         * TODO: BIGUPDATE: Change this to accept a gist with multiple files
         * However this requires an update to the backup mechanism as well
         */
        const firstFilename = Object.keys(files)[0] // get the filename of the first file
        /**
         * Pull the first file
         */
        const file = files[firstFilename]
        /**
         * Convert the files content to JSON
         */
        const JSONConvertedFile = JSON.parse(file.content)
        dispatch(restoreBookmarks(JSONConvertedFile))
        dispatch(actions.setLoading(false))
        dispatch(toastShow('Backup loaded successfully'))
      })
      .catch(err => {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(err))
        dispatch(
          toastShow('There was an error loading the backup')
        )
      })
  }
}

export function updateBackup(gistID, filename) {
  return (dispatch, getState) => {
    /**
     * Standard start,
     * clear all errors and
     * set loading
     */
    dispatch(actions.clearError())
    dispatch(actions.setLoading(true))

    const { bookmarks, sync } = getState()

    /**
     * Slimmed down version of the payload
     * we send in the creation step.
     *
     * We don't need everything with an update, just the changed bits
     */
    const gist = {
      files: {
        [filename]: {
          content: JSON.stringify(bookmarks),
        },
      },
    }
    updateGist(sync.token, gistID, gist)
      .then(resp => {
        const { data } = resp
        const backupDetails = {
          description: data.description,
          isPublic: data.public,
          gistId: data.id,
          url: data.html_url,
          filename: Object.keys(data.files)[0],
        }
        dispatch(actions.setLoading(false))
        dispatch(actions.setBackupDetails(backupDetails))
        dispatch(toastShow('Updated successfully'))
      })
      .catch(err => {
        dispatch(actions.setLoading(false))
        dispatch(actions.setError(err))
        dispatch(toastShow('There was an error updating'))
      })
  }
}

export function disconnectBackup() {
  return dispatch => {
    dispatch(actions.clearBackupDetails())
    dispatch(toastShow('Successfully disconnected backup'))
  }
}

/**
 * Log the user out
 * this resets the reducer to
 * initial state
 */
export function logout() {
  return dispatch => {
    dispatch(actions.logout())
    dispatch(toastShow('Successfully logged out'))
  }
}
