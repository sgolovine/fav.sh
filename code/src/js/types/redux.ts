import { BookmarkState } from '~/store/modules/bookmarks'
import { SyncState } from '~/store/modules/sync'
import { SearchState } from '~/store/modules/search'
import { TagsState } from '~/store/modules/tags'
import { NavigationState } from '~/store/modules/navigation'
import { EditingState } from '~/store/modules/editing'

export type AppAction = {
  type: string
  payload?: any
}

export type AppState = {
  bookmarks: BookmarkState
  search: SearchState
  sync: SyncState
  tags: TagsState
  navigation: NavigationState
  editing: EditingState
}
