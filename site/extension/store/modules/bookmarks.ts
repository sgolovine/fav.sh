import { Bookmark } from "../../types/Bookmark";
import { AppAction, AppState } from "../../types/redux";
import omit from "lodash/fp/omit";
import uniq from "lodash/fp/uniq";

export type BookmarkState = {
  [guid: string]: Bookmark;
};

export const initialState: BookmarkState = {
  sample: {
    guid: "sample",
    name: "Google",
    href: "https://google.com",
    desc: "The Google home page",
    tags: ["search-engine"]
  },
  sample1: {
    guid: "sample1",
    name: "Apple",
    href: "https://apple.com",
    desc: "The Apple home page",
    tags: ["product", "service"]
  }
};

export const actions = {
  add: (bookmark: Bookmark) => ({
    type: "ADD_BOOKMARK",
    payload: bookmark
  }),
  remove: (guid: string) => ({
    type: "REMOVE_BOOKMARK",
    payload: guid
  })
};

export function reducer(
  state: BookmarkState = initialState,
  action: AppAction
) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        [action.payload.guid]: action.payload
      };
    case "REMOVE_BOOKMARK":
      return omit([action.payload], state);
    default:
      return state;
  }
}

export const getBookmarks = (state: AppState) => state.bookmarks;

export const getBookmark = (state: AppState, guid: string) =>
  state.bookmarks[guid];

export const getTags = (state: AppState) => {
  const { bookmarks } = state;
  // Whats going on here:
  // 1. Take all the tags arrays from all bookmarks
  // 2. Flatten them into a single array using Array.flat()
  // 3. Return only unique values using lodash.uniq()
  const tags = uniq(
    Object.keys(bookmarks)
      .map(key => bookmarks[key].tags)
      .flat()
  );

  return tags;
};
