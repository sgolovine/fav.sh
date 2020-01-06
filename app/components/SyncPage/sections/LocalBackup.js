import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBookmarks } from 'store/modules/bookmarks'
import { downloadObjectAsJson } from 'util/download'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const LocalBackup = props => (
  <div>
    <Typography variant="body1">
      Backup your bookmarks collection to a JSON file.
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        downloadObjectAsJson(props.bookmarks, 'myBookmarks')
      }}
    >
      Backup
    </Button>
  </div>
)

LocalBackup.propTypes = {
  bookmarks: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
})

export default connect(mapStateToProps)(LocalBackup)
