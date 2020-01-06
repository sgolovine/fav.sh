export const uiState = {
  sidebarOpen: false,
}

const types = {
  TOGGLE_DRAWER: 'ui/TOGGLE_DRAWER',
}

const actions = {
  toggleDrawer: newState => ({
    type: types.TOGGLE_DRAWER,
    payload: newState,
  }),
}

export default function reducer(
  state = uiState,
  action = {}
) {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {
        ...state,
        sidebarOpen: action.payload,
      }
    default:
      return state
  }
}

export function toggleSidebar() {
  return (dispatch, getState) => {
    const { sidebarOpen } = getState().ui
    dispatch(actions.toggleDrawer(!sidebarOpen))
  }
}

export const getSidebarToggleState = state =>
  state.ui.sidebarOpen
