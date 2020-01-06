import * as actions from './actions'
import { toastShow } from 'store/modules/toast'
import { addBookmark } from 'store/modules/bookmarks'
import uuid from 'uuid/v1'

export function submitDraft() {
  const timestamp = new Date().toUTCString()
  return (dispatch, getState) => {
    /* Get draft from state
     * and check that we have a draft
     */
    const { draft } = getState()
    if (!draft) {
      dispatch(actions.submitFail())
      dispatch(
        toastShow('Could not submit. Draft not found')
      )
      return
    }

    const { name, href, tags = [], guid, desc } = draft
    if (!name || !href || !guid) {
      dispatch(actions.submitFail())
      if (!name) {
        dispatch(
          toastShow('Could not submit. Name not found')
        )
        return
      }
      if (!href) {
        dispatch(
          toastShow('Could not submit. URL not found')
        )
        return
      }
      if (!guid) {
        dispatch(toastShow('undefined guid'))
        return
      }
    }
    const payload = {
      name,
      href,
      desc,
      tags,
      guid,
      createdOn: draft.createdOn || timestamp,
      modifiedOn: timestamp,
    }
    dispatch(addBookmark(payload))
    dispatch(actions.clear())
    dispatch(toastShow('Bookmark submitted successfully'))
    dispatch(actions.submitSuccess())
  }
}

export function importBookmark(guid) {
  return (dispatch, getState) => {
    const { bookmarks } = getState()
    const bookmark = bookmarks[guid]
    dispatch(actions.importDraft(bookmark))
  }
}

export function startDraft() {
  const guid = uuid()
  return dispatch => {
    dispatch(actions.clear())
    dispatch(actions.setGuid(guid))
  }
}
