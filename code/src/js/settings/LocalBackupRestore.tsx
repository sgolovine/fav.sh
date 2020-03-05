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
import { BookmarkState } from '~/store/modules/bookmarks'
import { saveAs } from 'file-saver'

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
      // console.log(bookmarks)
      if (bookmarks && Object.keys(bookmarks as BookmarkState).length > 0) {
        const bookmarksToExport = JSON.stringify(bookmarks, null, 2)
        const bookmarksBlob = new Blob([bookmarksToExport], {
          type: 'application/json',
        })
        saveAs(bookmarksBlob, `${filename}.json`)
        return
      }
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
