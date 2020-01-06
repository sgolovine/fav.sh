import * as types from './actionTypes'

export function editName(name) {
  return {
    type: types.EDIT_NAME,
    payload: { name },
  }
}

export function editDesc(desc) {
  return {
    type: types.EDIT_DESC,
    payload: { desc },
  }
}

export function editHref(href) {
  return {
    type: types.EDIT_HREF,
    payload: { href },
  }
}

export function addTag(tag) {
  return {
    type: types.ADD_TAG,
    payload: { tag },
  }
}

export function removeTag(tag) {
  return {
    type: types.REMOVE_TAG,
    payload: { tag },
  }
}

export function clear() {
  return {
    type: types.CLEAR,
  }
}

export function submit() {
  return {
    type: types.SUBMIT,
  }
}

export function submitSuccess() {
  return {
    type: types.SUBMIT_SUCCESS,
  }
}

export function submitFail() {
  return {
    type: types.SUBMIT_FAIL,
  }
}

export function importDraft(bookmark) {
  return {
    type: types.IMPORT,
    payload: { bookmark },
  }
}

export function setGuid(guid) {
  return {
    type: types.SET_GUID,
    payload: { guid },
  }
}
