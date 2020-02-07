import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { authURL } from 'variables'

/* Redux */
import { connect } from 'react-redux'

import {
  login,
  logout,
  getAuthenticated,
  getLoading,
} from 'store/modules/sync'

function GithubLoginButton(props) {
  const handleLogout = () => props.logout()

  const handleLogin = () =>
    chrome.identity.launchWebAuthFlow(
      {
        url: authURL,
        interactive: true,
      },
      resp => {
        const code = resp.split('/?code=')[1]
        chrome.storage.local.set({ code }, () => {
          console.log('stored code')
        })
        props.login(code)
      }
    )

  const LogOutButton = () => (
    <Button variant="contained" onClick={handleLogout}>
      <PaddedIcon icon={faGithub} /> Log Out
    </Button>
  )

  const LogInButton = () => (
    <Button variant="contained" onClick={handleLogin}>
      <PaddedIcon icon={faGithub} /> Log In
    </Button>
  )

  return props.isAuthed ? <LogOutButton /> : <LogInButton />
}

GithubLoginButton.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  isAuthed: getAuthenticated(state),
})

const mapDispatchToProps = {
  login,
  logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubLoginButton)

export const PaddedIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
`
