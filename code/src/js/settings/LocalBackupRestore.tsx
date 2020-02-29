import React, { useState } from 'react'
import {
  SectionContainer,
  SectionHeader,
  SectionContent,
  DownloadInputContainer,
  SettingsTextField,
  SettingsButton,
  PaddedAction,
} from './common'
import { Typography } from '@material-ui/core'
import { getBookmarksFromStorage } from '~/browser/getBookmarksFromStorage'

export const LocalRestore = () => {
  const handleClick = () => {}

  return (
    <SectionContainer>
      <SectionHeader>Restore</SectionHeader>
      <SectionContent>
        <Typography>
          Restore your bookmarks from a JSON file on your computer
        </Typography>
        <PaddedAction>
          <SettingsButton onClick={handleClick} text="Select File" />
        </PaddedAction>
      </SectionContent>
    </SectionContainer>
  )
}

export const LocalBackup = () => {
  const [filename, setFilename] = useState('')

  const handleBackup = () => {
    getBookmarksFromStorage().then((bookmarks) => {
      console.log(bookmarks)
    })
  }

  return (
    <SectionContainer>
      <SectionHeader>Backup</SectionHeader>
      <SectionContent>
        <Typography>
          Backup your bookmarks to a JSON file on your computer
        </Typography>
        <DownloadInputContainer>
          <SettingsTextField
            value={filename}
            onChange={setFilename}
            label="Filename"
          />
          <SettingsButton
            disabled={!filename}
            onClick={handleBackup}
            text="Download"
          />
        </DownloadInputContainer>
      </SectionContent>
    </SectionContainer>
  )
}
