import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteBookmark } from 'store/modules/bookmarks'
import { importBookmark } from 'store/modules/draft'
import uuid from 'uuid/v1'

import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'

const IN_CASE_NO_GUID_PRESENT = uuid()

class Actions extends React.PureComponent {
  handleEdit = () => {
    const { importBookmark, guid } = this.props
    importBookmark(guid)
  }

  handleDelete = () => {
    const { deleteBookmark, guid } = this.props
    deleteBookmark(guid)
  }

  render() {
    return (
      <>
        <IconButton
          onClick={this.handleEdit}
          component={Link}
          to="/edit"
        >
          <CreateIcon />
        </IconButton>
        <IconButton onClick={this.handleDelete}>
          <DeleteIcon />
        </IconButton>
      </>
    )
  }
}

Actions.propTypes = {
  guid: PropTypes.string,
  importBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
}

Actions.defaultProps = {
  guid: IN_CASE_NO_GUID_PRESENT,
}

const mapDispatchToProps = {
  importBookmark,
  deleteBookmark,
}

export default connect(
  null,
  mapDispatchToProps
)(Actions)
