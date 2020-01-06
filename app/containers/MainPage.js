import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleSidebar } from 'store/modules/ui'
import { startDraft } from 'store/modules/draft'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import RootShell from './RootShell'
import Button, {
  IconButton,
} from 'components/common/Button'
import TagsSidebar from 'components/TagsSidebar'
import BookmarkList from 'components/BookmarkList'

/** Icons */
import MenuIcon from '@material-ui/icons/Menu'
import Add from '@material-ui/icons/Add'

import HeaderSearch from 'components/HeaderSearch'

function MainPage({ toggleSidebar, startDraft }) {
  /** Left Header Buttons:
   *  Sidebar
   */
  const HeaderLeft = () => (
    <>
      <IconButton
        aria-label="Sidebar"
        icon={<MenuIcon />}
        onClick={toggleSidebar}
      />
      <HeaderSearch />
    </>
  )

  /** Right Header Buttons:
   *  Save Bookmarks (if sync is on)
   *  Add a bookmark
   *  Open Sync Window
   */
  const HeaderRight = () => (
    <>
      <IconButton
        variant="outlined"
        aria-label="Create Bookmark"
        icon={<Add fontSize="small" />}
        to="/add"
        component={Link}
        onClick={startDraft}
      />
      <StyledButton component={Link} to="/sync">
        Sync
      </StyledButton>
    </>
  )

  return (
    <RootShell
      headerLeftComponents={<HeaderLeft />}
      headerRightComponents={<HeaderRight />}
      sidebarContent={<TagsSidebar />}
      rootContent={<BookmarkList />}
    />
  )
}

MainPage.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  startDraft: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  toggleSidebar,
  startDraft,
}

export default connect(
  null,
  mapDispatchToProps
)(MainPage)

const StyledButton = styled(Button)`
  color: #fff !important;
  font-weight: bold;
`
