import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton } from '@material-ui/core'
import { MdCreate, MdArrowBack } from 'react-icons/md'
import styled from 'styled-components'

const HeaderRightButton = () => (
  <IconButton onClick={() => {}}>
    <MdCreate color="#fff" />
  </IconButton>
)

const HeaderLeftButton = () => (
  <IconButton>
    <MdArrowBack />
  </IconButton>
)

export const Categories = () => {
  return (
    <>
      <Header>
        <FlexContainer>
          <Section>
            <HeaderLeftButton />
            <HeaderText>Categories</HeaderText>
          </Section>
          <Section>
            <HeaderRightButton />
          </Section>
        </FlexContainer>
      </Header>
      <p>Sidebar Screen</p>
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
