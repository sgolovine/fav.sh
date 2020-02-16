import { AppAction, AppState } from '~/types/redux'

export type SearchState = {
  searchTerm: string
}

export const initialState: SearchState = {
  searchTerm: '',
}

export const setSearchTerm = (term: string) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload: term,
  }
}

export function reducer(state: SearchState = initialState, action: AppAction) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        searchTerm: action.payload,
      }
    default:
      return state
  }
}

export const getSearchTerm = (state: AppState) => state.search.searchTerm
