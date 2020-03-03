import { BookmarkState } from "../store/modules/bookmarks";
import { TagsState } from "../store/modules/tags";
import { NavigationState } from "../store/modules/navigation";
import { EditingState } from "../store/modules/editing";

export type AppAction = {
  type: string;
  payload?: any;
};

export type AppState = {
  bookmarks: BookmarkState;
  tags: TagsState;
  navigation: NavigationState;
  editing: EditingState;
};
