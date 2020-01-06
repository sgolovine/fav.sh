/* eslint no-console: 0 */
import * as actions from './actions'
import { getToken, getBackupDetails } from './selectors'
import {
  getBookmarks,
  restoreBookmarks,
} from 'store/modules/bookmarks'
import { toastShow } from 'store/modules/toast'
import { getGithubToken } from 'api/gatekeeper'
import { createGist, getGist, updateGist } from 'api/gist'
import keys from 'ramda/src/keys'
import { GIST_FILENAME } from 'variables'

export function login(token) {
  return dispatch => {
    dispatch(actions.tokenLoading())
    getGithubToken(token).then(resp => {
      if (resp.data.token) {
        dispatch(actions.tokenLoadSuccess(resp.data.token))
        dispatch(
          toastShow('Successfully Logged in with Github')
        )
      }
      if (resp.data.error) {
        dispatch(actions.tokenLoadFail())
      }
    })
  }
}

export function backup(
  backupFilename,
  backupDescription,
  isSecret
) {
  return (dispatch, getState) => {
    dispatch(actions.backupLoading())
    const bookmarks = getBookmarks(getState())
    const apiKey = getToken(getState())
    const payload = {
      description: backupDescription,
      public: !isSecret,
      files: {
        [backupFilename || GIST_FILENAME]: {
          content: JSON.stringify(bookmarks, null, 2),
        },
      },
    }
    createGist(apiKey, payload)
      .then(resp => {
        dispatch(actions.backupSuccess(resp.data.html_url))
        dispatch(
          actions.updateBackupDetails({
            description: backupDescription,
            public: !isSecret,
            gistId: resp.data.id,
            filename: backupFilename,
          })
        )
        dispatch(toastShow('Backup success'))
      })
      .catch(err => {
        console.warn(err)
        dispatch(actions.backupFail())
        dispatch(toastShow('Backup failed'))
      })
  }
}

export function update() {
  return (dispatch, getState) => {
    dispatch(toastShow('Updating...'))
    /* Set the loading state to true */
    dispatch(actions.updateLoading())
    /* Fetch Our bookmarks, apiKey and backup details */
    const bookmarks = getBookmarks(getState())
    const apiKey = getToken(getState())
    const backupDetails = getBackupDetails(getState())
    /* Create the gist payload */
    const payload = {
      description: backupDetails.description,
      public: backupDetails.public,
      files: {
        [backupDetails.filename || GIST_FILENAME]: {
          content: JSON.stringify(bookmarks, null, 2),
        },
      },
    }
    /*
     * Update gist (api/gist) will use gihub-api
     * To reach out and update the specified gist
     */
    updateGist(apiKey, backupDetails.gistId, payload)
      .then(({ data }) => {
        dispatch(actions.updateSuccess(data.html_url))
        dispatch(
          actions.updateBackupDetails({
            location: backupDetails.location,
            description: backupDetails.description,
            public: backupDetails.public,
            gistId: backupDetails.gistId,
            filename: backupDetails.filename,
          })
        )
        dispatch(toastShow('Update success'))
      })
      .catch(err => {
        console.warn(err)
        dispatch(actions.backupFail())
        dispatch(toastShow('Backup failed'))
      })
  }
}

export function restore(
  gistID,
  gistFilename,
  silent = false
) {
  return (dispatch, getState) => {
    const apiKey = getToken(getState())
    dispatch(actions.restoreLoading())
    getGist(apiKey, gistID)
      .then(resp => {
        const { data } = resp
        const { files } = data
        const primaryKey = gistFilename || keys(files)[0]
        if (!primaryKey) {
          dispatch(actions.restoreFail())
          if (!silent) {
            dispatch(
              toastShow('Restore Failed (Primary Key)')
            )
          }
        }
        const currentFile = files[primaryKey]
        dispatch(actions.restoreSuccess())
        /* TODO: Validate JSON before loading */
        dispatch(
          restoreBookmarks(JSON.parse(currentFile.content))
        )
        dispatch(
          actions.updateBackupDetails({
            location: data.html_url,
            description: data.description,
            public: data.public,
            gistId: data.id,
            filename: primaryKey,
          })
        )
        if (!silent) {
          dispatch(toastShow('Restore Sucessful'))
        }
      })
      .catch(err => {
        dispatch(actions.restoreFail())
        if (!silent) {
          dispatch(
            toastShow(
              'Restore Failed, could not fetch file'
            )
          )
        }
        console.log(err)
      })
  }
}
