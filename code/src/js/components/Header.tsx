import React from 'react'
import { IconButton, Typography, Toolbar } from '@material-ui/core'
import { MdMenu, MdSync } from 'react-icons/md'
import styled from 'styled-components'

export const MainHeader = () => (
  <AppToolbar>
    <Section>
      <IconButton edge="start" aria-label="menu-button">
        <MdMenu color="#fff" />
      </IconButton>
      <Typography variant="h6">Fav Bookmark Manager</Typography>
    </Section>
    <Section>
      <IconButton edge="end" aria-label="sync-button">
        <MdSync color="#fff" />
      </IconButton>
    </Section>
  </AppToolbar>
)

const AppToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
