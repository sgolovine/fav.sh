import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as toastModule from 'store/modules/toast'
import Snackbar from '@material-ui/core/Snackbar'
import { IconButton } from 'components/common/Button'
import CloseIcon from '@material-ui/icons/Close'

class Notification extends React.Component {
  handleClose = (event, reason) => {
    const { hide } = this.props
    if (reason === 'clickaway') {
      return
    }
    hide()
  }

  render() {
    const { isOpen, message } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isOpen}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              label="Close"
              onClick={this.handleClose}
              icon={<CloseIcon />}
            />,
          ]}
        />
      </div>
    )
  }
}

Notification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isOpen: toastModule.isOpen(state),
  message: toastModule.getMessage(state),
})

const mapDispatchToProps = {
  hide: toastModule.hide,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
