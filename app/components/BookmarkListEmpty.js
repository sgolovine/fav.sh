/**
 * This is the component that renders
 * in bookmarks list when there are
 * no items
 */
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { shouldApplySearch } from 'store/modules/search'

function BookmarkListEmpty(props) {
  if (props.applySearch) {
    return (
      <Container>
        <PadText variant="h5">
          Sorry, no bookmarks match the search term
        </PadText>
      </Container>
    )
  }
  return (
    <Container>
      <PadText variant="h5">
        Welcome to Fav.sh! Looks like you don&apos;t have
        any bookmarks yet. Lets change that.
      </PadText>

      <PadText variant="h5">
        Click the + icon in the header to add a bookmark
      </PadText>

      <PadText variant="h5">
        Once you&apos;ve added some bookmarks you can back
        them up in <Link to="/sync">sync</Link>
      </PadText>
    </Container>
  )
}

BookmarkListEmpty.propTypes = {
  applySearch: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  applySearch: shouldApplySearch(state),
})

export default connect(mapStateToProps)(BookmarkListEmpty)

const Container = styled.div`
  margin: 1em;
`

const PadText = styled(Typography)`
  padding-top: 0.25em;
  padding-bottom: 0.25em;
`
