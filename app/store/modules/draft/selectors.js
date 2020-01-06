export const getName = state =>
  (state.draft && state.draft.name) || null

export const getHref = state =>
  (state.draft && state.draft.href) || null

export const getTags = state =>
  (state.draft && state.draft.tags) || null

export const getDesc = state =>
  (state.draft && state.draft.desc) || null
