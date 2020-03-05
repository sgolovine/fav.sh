import { Bookmark, ExportedBookmark } from './types/Bookmark'
import pickBy from 'lodash/fp/pickBy'
import identity from 'lodash/fp/identity'
// Various helper methods for things around the codebase

export function isBlank(str: string) {
  return !str || /^\s*$/.test(str)
}

// Validate an imported bookmark
export function validateBookmark(bookmark: any) {
  // Level 1: Make sure that the object includes at least
  // a guid, name and href.
  if (Object.keys(bookmark).includes('name' && 'href')) {
    // Level 2: Validate that all of these items exist and are not undefined
    if (!isBlank(bookmark.name) && !isBlank(bookmark.href)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// There is a ton of extra stuff on an exported bookmark
// that the user does not care about
// strip this out on export
export function transformExportBookmark(bookmark: Bookmark): ExportedBookmark {
  // Carry over any defaults
  const draftBookmark: ExportedBookmark = {
    name: bookmark.name || 'Bookmark Name',
    href: bookmark.href || 'https://fav.sh',
    desc: bookmark.desc,
    tags: bookmark.tags.length > 0 ? bookmark.tags : undefined,
  }
  // Remove any empty keys
  const finalBookmark = pickBy(identity, draftBookmark) as ExportedBookmark
  return finalBookmark
}
