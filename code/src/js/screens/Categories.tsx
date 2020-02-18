import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton } from '@material-ui/core'
import { MdArrowBack } from 'react-icons/md'
import styled from 'styled-components'
import { navigate } from '~/store/modules/navigation'
import { useDispatch } from 'react-redux'

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdArrowBack color="#fff" />
  </IconButton>
)

export const Categories = () => {
  const dispatch = useDispatch()

  const goBack = () => {
    dispatch(navigate('home'))
  }

  return (
    <>
      <Header>
        <FlexContainer>
          <Section>
            <HeaderLeftButton onClick={goBack} />
            <HeaderText>Categories</HeaderText>
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
