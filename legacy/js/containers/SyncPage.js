import React from 'react'
import SyncPageContent from 'components/SyncPage'
import RootShell, { BackButton } from './RootShell'
import GithubLoginButton from 'components/SyncPage/GithubLoginButton'

const HeaderLeft = () => <GithubLoginButton />

function SyncPage() {
  return (
    <RootShell
      withBackButton
      headerName="Backup and Sync"
      headerLeftComponents={<HeaderLeft />}
      headerRightComponents={<BackButton />}
      rootContent={<SyncPageContent />}
    />
  )
}
export default SyncPage
