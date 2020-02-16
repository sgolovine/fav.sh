import { BookmarkState } from 'js/store/modules/bookmarks'
import { SyncState } from 'js/store/modules/sync'
import { SearchState } from 'js/store/modules/search'
import { TagsState } from 'js/store/modules/tags'

export type AppAction = {
  type: string
  payload?: any
}

export type AppState = {
  bookmarks: BookmarkState
  search: SearchState
  sync: SyncState
  tags: TagsState
}
