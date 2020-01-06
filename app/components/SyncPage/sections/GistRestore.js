import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  restoreBackup,
  getLoading,
} from 'store/modules/sync'
import Loader from 'components/loader'

const GistRestore = props => {
  const [gistID, setGistID] = useState('')
  if (props.loading) {
    return <Loader />
  }
  return (
    <div>
      <Typography as="body1">
        Restore from a GistID. This will overwrite current
        bookmarks
      </Typography>
      <TextFieldContainer>
        <TextField
          id="gist-restore"
          variant="outlined"
          placeholder="Gist ID"
          margin="dense"
          onChange={e => setGistID(e.target.value)}
        />
      </TextFieldContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.restoreBackup(gistID)}
      >
        Restore
      </Button>
    </div>
  )
}

GistRestore.propTypes = {
  restoreBackup: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  loading: getLoading(state),
})

const mapDispatchToProps = {
  restoreBackup,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GistRestore)

const TextFieldContainer = styled.div`
  display: flex;
  flex: 1;
`
