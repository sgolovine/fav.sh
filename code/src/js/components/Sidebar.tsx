import React from 'react'
import { IconButton, Drawer } from '@material-ui/core'
import { MdMenu } from 'react-icons/md'

type SidebarTriggerProps = {
  onClick: () => void
}

export const SidebarTrigger = ({ onClick }: SidebarTriggerProps) => {
  return (
    <IconButton onClick={onClick}>
      <MdMenu color="#fff" />
    </IconButton>
  )
}

export const Sidebar = ({
  visible,
  onClose,
}: {
  visible: boolean
  onClose: () => void
}) => {
  return (
    <Drawer open={visible} onClose={onClose}>
      <p>Drawer Content</p>>
    </Drawer>
  )
}
