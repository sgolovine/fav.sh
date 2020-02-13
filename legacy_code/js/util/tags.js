/* eslint prefer-template: 0 */
/**
 * This functions takes in an object of bookmarks
 * and returns all tags from bookmarks
 */
import keys from 'ramda/src/keys'
import map from 'ramda/src/map'
import uniq from 'ramda/src/uniq'
import flatten from 'ramda/src/flatten'
import filter from 'ramda/src/filter'

export function extractTags(bookmarks) {
  const bookmarkGuids = keys(bookmarks)
  const tags = map(key => {
    const bookmark = bookmarks[key]
    return bookmark.tags || []
  }, bookmarkGuids)
  return uniq(flatten(tags))
}

export function add(str, arr = []) {
  return uniq([...arr, str])
}

export function remove(str, arr = []) {
  const matchItem = (item, str) =>
    !!item.match(new RegExp('^' + str + '$', 'g'))
  return filter(item => !matchItem(item, str), arr)
}
