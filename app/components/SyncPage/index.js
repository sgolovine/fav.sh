import React from 'react'
import PropTypes from 'prop-types'
import SyncSection from './SyncSection'
import {
  GistBackup,
  GistRestore,
  LocalBackup,
  LocalRestore,
} from './sections'
import { connect } from 'react-redux'
import { getAuthenticated } from 'store/modules/sync'

const loginWarn = '(Log in to use this feature)'

function SyncPage({ isAuthed }) {
  return (
    <>
      <SyncSection header="Backup to File">
        <LocalBackup />
      </SyncSection>

      <SyncSection header="Restore From File (Popup Window Only)">
        <LocalRestore />
      </SyncSection>

      <SyncSection
        disabled={!isAuthed}
        github
        header={`Backup to a Gist ${
          !isAuthed ? loginWarn : ''
        }`}
      >
        <GistBackup />
      </SyncSection>

      <SyncSection
        github
        header="Restore from Anonymous Github Gist"
      >
        <GistRestore />
      </SyncSection>

      {/** LATER RELEASE */}
      {/* <SyncSection
        disabled={!isAuthed}
        github
        header={`Backup Settings ${
          !isAuthed ? loginWarn : ''
        }`}
      >
        <SyncSettings />
      </SyncSection> */}
    </>
  )
}
SyncPage.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthed: getAuthenticated(state),
})

export default connect(mapStateToProps)(SyncPage)
