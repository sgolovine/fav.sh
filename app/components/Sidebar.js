import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getSidebarToggleState,
  toggleSidebar,
} from 'store/modules/ui'
import Drawer from '@material-ui/core/Drawer'

function ConnectedSidebarShell(props) {
  const { open, children, toggleSidebar } = props
  return (
    <Drawer open={open} onClose={toggleSidebar}>
      {children}
    </Drawer>
  )
}

ConnectedSidebarShell.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  open: getSidebarToggleState(state),
})

const mapDispatchToProps = {
  toggleSidebar,
}

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSidebarShell)

export default Connected
