import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBookmarks } from 'store/modules/bookmarks'
import { getActiveTags } from 'store/modules/tags'
import BookmarkCard from './BookmarkCard'
import styled from 'styled-components'
import EmptyComponent from './BookmarkListEmpty'
import keys from 'ramda/src/keys'
import filter from 'ramda/src/filter'
import {
  getSearchTerm,
  shouldApplySearch,
} from 'store/modules/search'
import escapeRegExp from 'lodash.escaperegexp'

function applySearch(searchTerm, bookmarks) {
  const re = new RegExp(escapeRegExp(searchTerm), 'i')
  const isMatch = result => re.test(result.name)
  return filter(isMatch, bookmarks)
}

export function getActiveBookmarks(bookmarks, activeTags) {
  const bookmarksToRender = filter(item => {
    const { tags = [] } = item
    return activeTags.some(r => tags.includes(r))
  }, bookmarks)
  return bookmarksToRender
}

export function renderBookmarks(bookmarks) {
  const bookmarkKeys = keys(bookmarks)
  if (bookmarkKeys.length === 0) {
    return <EmptyComponent />
  }
  return (
    <Container>
      {bookmarkKeys.map(currentKey => (
        <BookmarkCard
          key={currentKey}
          name={bookmarks[currentKey].name}
          href={bookmarks[currentKey].href}
          desc={bookmarks[currentKey].desc}
          tags={bookmarks[currentKey].tags}
          meta={{
            guid: bookmarks[currentKey].guid,
            createdOn: bookmarks[currentKey].createdOn,
            modifiedOn: bookmarks[currentKey].modifiedOn,
          }}
        />
      ))}
    </Container>
  )
}

export const BookmarkList = props => {
  const { bookmarks, activeTags } = props
  if (activeTags.length > 0) {
    const activeBookmarks = getActiveBookmarks(
      bookmarks,
      activeTags
    )
    if (props.applySearch) {
      return renderBookmarks(
        applySearch(props.searchTerm, activeBookmarks)
      )
    }
    return renderBookmarks(activeBookmarks)
  }
  if (props.applySearch) {
    return renderBookmarks(
      applySearch(props.searchTerm, bookmarks)
    )
  }
  return renderBookmarks(bookmarks)
}

BookmarkList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookmarks: PropTypes.object,
  activeTags: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  applySearch: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

BookmarkList.defaultProps = {
  bookmarks: {},
}

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
  activeTags: getActiveTags(state),
  applySearch: shouldApplySearch(state),
  searchTerm: getSearchTerm(state),
})
export default connect(mapStateToProps)(BookmarkList)

const Container = styled.div`
  flex-direction: column;
  left: 1.5em;
  right: 1.5em;
`
