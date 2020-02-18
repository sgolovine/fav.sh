import React from 'react'
import Header, { HeaderText } from '~/components/common/Header'
import { IconButton, TextField, Button } from '@material-ui/core'
import { MdCreate, MdArrowBack } from 'react-icons/md'
import styled from 'styled-components'
import { navigate } from '~/store/modules/navigation'
import { useDispatch } from 'react-redux'

const HeaderLeftButton = ({ onClick }: { onClick: () => void }) => (
  <IconButton onClick={onClick}>
    <MdArrowBack color="#fff" />
  </IconButton>
)

export const AddScreen = () => {
  const dispatch = useDispatch()

  const goBack = () => {
    dispatch(navigate('home'))
  }

  const createBookmark = () => {
    dispatch(navigate('home'))
  }

  const renderHeader = () => (
    <Header>
      <FlexContainer>
        <Section>
          <HeaderLeftButton onClick={goBack} />
          <HeaderText>Add</HeaderText>
        </Section>
        <Section>
          <ConfirmButton variant="outlined" onClick={createBookmark}>
            Create Bookmark
          </ConfirmButton>
        </Section>
      </FlexContainer>
    </Header>
  )

  const renderForm = () => (
    <FormContainer>
      <FieldsContainer>
        <Text label="Name" variant="outlined" />
        <Text label="Website" variant="outlined" />
        <Text label="Description" variant="outlined" multiline rows="4" />
      </FieldsContainer>
    </FormContainer>
  )

  return (
    <>
      {renderHeader()}
      {renderForm()}
    </>
  )
}

const ConfirmButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  margin-left: 0.25em;
  margin-right: 0.25em;
  font-size: 14px;
`

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled(TextField)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.25em;
  padding-left: 0.75em;
  padding-right: 0.75em;
`

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
