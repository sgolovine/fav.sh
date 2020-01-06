/**
 * This is the root app container
 * All components start here
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Router from 'Router'
import DevTools from 'containers/DevTools'
import { getToken, login } from 'store/modules/sync'

class AppContainer extends React.Component {
  componentDidMount() {
    const { token, login } = this.props
    if (!token) {
      chrome.storage.local.get(['code'], res => {
        if (res.code) {
          login(res.code, true)
        }
      })
    }
  }

  render() {
    return (
      <>
        <Router />
        {process.env.NODE_ENV === 'development' && (
          <DevTools />
        )}
      </>
    )
  }
}

AppContainer.propTypes = {
  token: PropTypes.string,
  login: PropTypes.func.isRequired,
}

AppContainer.defaultProps = {
  token: undefined,
}

const mapStateToProps = state => ({
  token: getToken(state),
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
