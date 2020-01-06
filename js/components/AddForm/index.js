import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as draftModule from 'store/modules/draft'

import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'

import { LinkButton } from 'components/common/Button'
import validURL from 'valid-url'
import styled from 'styled-components'
import { isEmptyObject } from 'util/empty'
import { Link } from 'react-router-dom'
import Tags from './Tags'
import { getActiveTabInfo } from 'util/getActiveTabInfo'

class Create extends React.PureComponent {
  componentDidMount() {
    /**
     * This should come before we make any sort of edits
     * Bad things will happen otherwise
     */

    const { editMode, editName, editHref } = this.props

    /** Make sure to check that we are not in edit mode first
     */
    if (!editMode) {
      this.props.start() // start the draft`
      chrome.windows.getLastFocused(
        { populate: true },
        window => {
          const { title, url } = getActiveTabInfo(window)
          if (title) {
            editName(title)
          }
          if (url) {
            editHref(url)
          }
        }
      )
    }
  }

  hrefError = href => {
    if (isEmptyObject(href)) {
      return false
    }
    if (validURL.isWebUri(href)) {
      return false
    }
    return true
  }

  handleSubmit = () => {
    const { submit } = this.props
    submit()
  }

  handleEditName = event => {
    const { editName } = this.props
    const { value } = event.target
    editName(value)
  }

  handleEditHref = event => {
    const { editHref } = this.props
    const { value } = event.target
    editHref(value)
  }

  handleEditDesc = event => {
    const { editDesc } = this.props
    const { value } = event.currentTarget
    editDesc(value)
  }

  renderName = () => {
    const { bookmarkName } = this.props
    return (
      <StyledTextField
        fullWidth
        variant="outlined"
        label="Bookmark Name"
        placeholder="My Awesome Bookmark"
        value={bookmarkName || ''}
        onChange={this.handleEditName}
      />
    )
  }

  renderHref = () => {
    const { bookmarkHref } = this.props
    const hrefError = this.hrefError(bookmarkHref)
    return (
      <StyledTextField
        fullWidth
        variant="outlined"
        label="Bookmark Address"
        placeholder="http://fav.sh/"
        value={bookmarkHref || ''}
        onChange={this.handleEditHref}
        error={hrefError}
      />
    )
  }

  renderDesc = () => {
    const { bookmarkDesc } = this.props
    return (
      <StyledTextField
        fullWidth
        variant="outlined"
        label="Description"
        value={bookmarkDesc || ''}
        onChange={this.handleEditDesc}
        multiline
        rows={3}
      />
    )
  }

  render() {
    const { editMode } = this.props

    return (
      <>
        <CardContent>
          {this.renderName()}
          {this.renderHref()}
          {this.renderDesc()}
          <Tags />
        </CardContent>
        <CardActions>
          <LinkButton
            variant="outlined"
            color="primary"
            onClick={this.handleSubmit}
            component={Link}
            to="/"
          >
            {editMode ? 'Done' : 'Create'}
          </LinkButton>
          <LinkButton
            variant="outlined"
            color="secondary"
            component={Link}
            to="/"
          >
            Cancel
          </LinkButton>
        </CardActions>
      </>
    )
  }
}

Create.propTypes = {
  bookmarkName: PropTypes.string,
  bookmarkHref: PropTypes.string,
  bookmarkDesc: PropTypes.string,
  editName: PropTypes.func.isRequired,
  editHref: PropTypes.func.isRequired,
  editDesc: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  start: PropTypes.func.isRequired,
}

Create.defaultProps = {
  bookmarkName: '',
  bookmarkHref: '',
  bookmarkDesc: '',
  editMode: false,
}

const mapStateToProps = state => ({
  bookmarkName: draftModule.getName(state),
  bookmarkHref: draftModule.getHref(state),
  bookmarkDesc: draftModule.getDesc(state),
})
const mapDispatchToProps = {
  editName: draftModule.editName,
  editHref: draftModule.editHref,
  editDesc: draftModule.editDesc,
  submit: draftModule.submitDraft,
  start: draftModule.startDraft,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)

const StyledTextField = styled(TextField)`
  margin-top: 0.25em !important;
  margin-bottom: 0.25em !important;
`
