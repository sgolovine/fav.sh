import { combineReducers, createStore, compose } from "redux";
import { AppState } from "~/types/redux";
import localStorage from "redux-persist/lib/storage";

import {
  initialState as bookmarksState,
  reducer as bookmarksReducer
} from "./modules/bookmarks";

import {
  initialState as tagsState,
  reducer as tagsReducer
} from "./modules/tags";

import {
  initialState as navigationState,
  reducer as navigationReducer
} from "./modules/navigation";

import {
  initialState as editingState,
  reducer as editingReducer
} from "./modules/editing";

export const storageKey = "localStorage";

const persistConfig = {
  key: storageKey,
  storage: localStorage
};

const appInitialState: AppState = {
  bookmarks: bookmarksState,
  tags: tagsState,
  navigation: navigationState,
  editing: editingState
};

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  tags: tagsReducer,
  navigation: navigationReducer,
  editing: editingReducer
});

export function configureStore() {
  const store = createStore(rootReducer, appInitialState);
  return { store };
}
