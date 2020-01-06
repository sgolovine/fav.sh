import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FileUploader from 'components/FileUploader'
import { restoreBookmarks } from 'store/modules/bookmarks'

const LocalRestore = props => {
  const handleFiles = files =>
    props.restoreBookmarks(JSON.parse(files))

  return (
    <div>
      <Typography variant="body1">
        Restore your bookmarks collection from a JSON file.
        This will overwrite any existing bookmarks
      </Typography>
      <Typography variant="body1">
        NOTE: You must open Fav in a window to perform this
        function (right click then Bookmarks)
      </Typography>
      <FileUploader handleFiles={handleFiles}>
        <Button variant="contained" color="primary">
          Select File
        </Button>
      </FileUploader>
    </div>
  )
}

LocalRestore.propTypes = {
  restoreBookmarks: PropTypes.func.isRequired,
}

const mapDispatchToProps = { restoreBookmarks }

export default connect(
  null,
  mapDispatchToProps
)(LocalRestore)
