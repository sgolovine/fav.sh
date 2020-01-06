import React from 'react'
import RootShell from './RootShell'
import Create from 'components/AddForm'

export default function AddPage() {
  return (
    <RootShell
      basicHeader
      headerName="Add Bookmark"
      rootContent={<Create />}
    />
  )
}
