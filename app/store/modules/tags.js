import { add, remove } from 'util/tags'
import includes from 'ramda/src/includes'

export const tagsState = { activeTags: [] }

const types = {
  SELECT: 'tags/SELECT',
  DESELECT: 'tags/DESELECT',
}

const actions = {
  select: tag => ({
    type: types.SELECT,
    payload: { tag },
  }),
  deselect: tag => ({
    type: types.DESELECT,
    payload: { tag },
  }),
}

export default function tags(
  state = tagsState,
  action = {}
) {
  switch (action.type) {
    case types.SELECT: {
      return {
        ...state,
        activeTags: add(
          action.payload.tag,
          state.activeTags
        ),
      }
    }
    case types.DESELECT: {
      return {
        ...state,
        activeTags: remove(
          action.payload.tag,
          state.activeTags
        ),
      }
    }
    default: {
      return state
    }
  }
}

export const getActiveTags = state => state.tags.activeTags

export function toggleTag(tag) {
  return (dispatch, getState) => {
    const activeTags = getActiveTags(getState())
    if (includes(tag, activeTags)) {
      dispatch(actions.deselect(tag))
      return
    }
    dispatch(actions.select(tag))
  }
}
