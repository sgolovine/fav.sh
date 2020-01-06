/**
 * Search module
 * Holds the current search term
 */

export const initialState = {
  searchTerm: '',
}

const UPDATE_SEARCH = 'search/UPDATE_SEARCH'

export function updateSearch(term) {
  return {
    type: UPDATE_SEARCH,
    payload: { term },
  }
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload.term,
      }
    }
    default: {
      return state
    }
  }
}

export const getSearchTerm = state =>
  state.search.searchTerm

/** Checks whether or not we should apply the search */
export const shouldApplySearch = state =>
  !!state.search.searchTerm
