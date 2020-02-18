import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton } from '@material-ui/core'
import { MdCreate, MdMenu } from 'react-icons/md'
import styled from 'styled-components'
import { Link } from '@reach/router'

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdMenu color="#fff" />
  </IconButton>
)

const HeaderRightButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdCreate color="#fff" />
  </IconButton>
)

export const MainScreen = ({ path }: { path: string }) => {
  return (
    <>
      <Header>
        <FlexContainer>
          <Section>
            <Link to="/add">Add</Link>
            <HeaderLeftButton onClick={() => {}} />
            <HeaderText>Bookmarks</HeaderText>
          </Section>
          <Section>
            <HeaderRightButton onClick={() => {}} />
          </Section>
        </FlexContainer>
      </Header>
      <p>Main Screen</p>
    </>
  )
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`
