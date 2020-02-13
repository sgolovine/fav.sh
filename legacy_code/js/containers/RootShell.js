/**
 * Root Container
 * This should be used as the basis for all new pages
 *
 * params
 *   basicHeader: boolean: false
 *   headerName: string: null
 *   headerLeftComponents: node:null
 *   headerRightComponents: node:null
 *   sidebarContent: node:null
 *   rootContent: node:null
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Sidebar from 'components/Sidebar'
import { IconButton } from 'components/common/Button'
import Notification from 'components/common/Notification'
import { toggleSidebar } from 'store/modules/ui'
import MenuIcon from '@material-ui/icons/Menu'

/** MUI */
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowBack from '@material-ui/icons/ArrowBack'

export const BackButton = () => (
  <IconButton
    label="Go Back"
    component={Link}
    to="/"
    icon={<ArrowBack />}
  />
)

function RootShell({
  basicHeader,
  headerName,
  headerLeftComponents,
  headerRightComponents,
  sidebarContent,
  rootContent,
  toggleSidebar,
}) {
  const SidebarButton = () => (
    <IconButton
      aria-label="Sidebar"
      icon={<MenuIcon />}
      onClick={toggleSidebar}
    />
  )

  const BasicHeader = () => (
    <AppToolbar>
      <Left>
        {sidebarContent && <SidebarButton />}
        <ToolbarText variant="h6" color="inherit">
          {headerName}
        </ToolbarText>
      </Left>
      <Right>
        <BackButton />
      </Right>
    </AppToolbar>
  )

  const ComplexHeader = () => (
    <AppToolbar>
      <Left>{headerLeftComponents}</Left>
      <Right>{headerRightComponents}</Right>
    </AppToolbar>
  )

  /* Renders out header */
  const HeaderShell = () => (
    <Appbar position="fixed">
      {basicHeader ? <BasicHeader /> : <ComplexHeader />}
    </Appbar>
  )

  /* Renders the body */
  const Body = () => (
    <RootContainer>
      {/* Optionally will render sidebar if specified */}
      {!!sidebarContent && (
        <Sidebar>{sidebarContent}</Sidebar>
      )}
      <RootContentContainer>
        {rootContent}
      </RootContentContainer>
    </RootContainer>
  )
  return (
    <AppContainer>
      <HeaderShell />
      <Body />
      <Notification />
    </AppContainer>
  )
}

RootShell.propTypes = {
  /* Props if using a simple header */
  basicHeader: PropTypes.bool,
  headerName: PropTypes.string,

  /* General Props */
  headerLeftComponents: PropTypes.node,
  headerRightComponents: PropTypes.node,
  sidebarContent: PropTypes.node,
  rootContent: PropTypes.node,
  toggleSidebar: PropTypes.func.isRequired,
}

RootShell.defaultProps = {
  basicHeader: false,
  headerName: null,
  headerLeftComponents: null,
  headerRightComponents: null,
  sidebarContent: null,
  rootContent: null,
}

const mapDispatchToProps = {
  toggleSidebar,
}

export default connect(
  null,
  mapDispatchToProps
)(RootShell)

/**
 * Styled Components
 */

const AppToolbar = styled(Toolbar)`
  display: flex !important;
  justify-content: space-between !important;
`

const ToolbarText = styled(Typography)`
  align-self: center;
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
`

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3.5em;
`

const RootContentContainer = styled.div`
  padding: 0.5em;
  padding-top: 2em;
  width: 100%;
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
