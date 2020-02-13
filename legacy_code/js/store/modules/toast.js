/* Redux module to handle showing and hiding notification */

/* possible variants
  - success
  - error
  - warning
  - info
*/
export const toastState = {
  message: '',
  isOpen: false,
}

const types = {
  SHOW: 'toast/SHOW',
  HIDE: 'toast/HIDE',
}

const actions = {
  show: message => ({
    type: types.SHOW,
    payload: { message },
  }),
  hide: () => ({
    type: types.HIDE,
  }),
}

export default function toast(
  state = toastState,
  action = {}
) {
  switch (action.type) {
    case types.SHOW: {
      return {
        ...state,
        message: action.payload.message,
        isOpen: true,
      }
    }
    case types.HIDE: {
      return toastState
    }
    default:
      return state
  }
}

export function toastShow(message) {
  return dispatch => dispatch(actions.show(message))
}

export function hide() {
  return dispatch => dispatch(actions.hide())
}

export const isOpen = state => state.toast.isOpen
export const getMessage = state => state.toast.message
