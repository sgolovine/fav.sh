import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  createBackup,
  getLoading,
  getDetails,
  disconnectBackup,
  updateBackup,
} from 'store/modules/sync'
import Loader from 'components/loader'
import { isEmptyObject } from 'util/empty'

/** Backup Components */
import { CompleteCard } from './Complete'
import { ExistingBackup } from './ExistingBackup'
import { NewBackup } from './NewBackup'

import { ContentContainer } from './styled'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'

const GistBackup = ({
  backup,
  loading,
  details,
  disconnectBackup,
  update,
}) => {
  const [filenameValue, setFilename] = useState('')
  const [descriptionValue, setDescription] = useState('')
  const [visibilityValue, setVisibility] = useState('')
  const [gistIdValue, setGistId] = useState('')
  const [backupType, setBackupType] = useState('new')

  const renderComplete = () => (
    <CompleteCard
      gistId={details.gistId}
      url={details.url}
      onDisconnect={() => disconnectBackup()}
      onUpdate={() => {
        if (details && details.gistId && details.filename) {
          update(details.gistId, details.filename)
        }
      }}
    />
  )

  const renderNewBackup = () => (
    <NewBackup
      descriptionValue={descriptionValue}
      filenameValue={filenameValue}
      visibilityValue={visibilityValue}
      setDescription={setDescription}
      setFilename={setFilename}
      setVisibility={setVisibility}
    />
  )

  const renderExistingBackup = () => (
    <ExistingBackup
      gistIdValue={gistIdValue}
      setGistId={setGistId}
      filenameValue={filenameValue}
      setFilename={setFilename}
    />
  )

  const renderContent = () => (
    <div>
      <ContentContainer>
        {backupType === 'new'
          ? renderNewBackup()
          : renderExistingBackup()}
        <RadioGroup
          aria-label="new-existing"
          name="new-existing"
          value={backupType}
          onChange={e => setBackupType(e.target.value)}
        >
          <FormControlLabel
            value="new"
            control={<Radio />}
            label="New Backup"
          />
          <FormControlLabel
            value="update"
            control={<Radio />}
            label="Existing Backup"
          />
        </RadioGroup>
      </ContentContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const isGistPublic = visibilityValue === 'public'
          /**
           * In order to prevent having to pass props
           * all over the place,
           * we filter everything here
           * based on the selected UI
           *
           * TODO: Make them const's?
           *
           * */
          if (backupType === 'new') {
            backup(
              filenameValue,
              descriptionValue,
              isGistPublic
            )
          }
          if (backupType === 'update') {
            update(gistIdValue, filenameValue)
          }
        }}
      >
        Backup
      </Button>
    </div>
  )

  if (loading) {
    return <Loader />
  }
  if (!isEmptyObject(details)) {
    return renderComplete()
  }
  return renderContent()
}

GistBackup.propTypes = {
  backup: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  disconnectBackup: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  loading: getLoading(state),
  details: getDetails(state),
})

const mapDispatchToProps = {
  backup: createBackup,
  disconnectBackup,
  update: updateBackup,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GistBackup)
