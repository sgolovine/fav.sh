import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column
  flex: 1;
  margin-right: 2.5em;
`

export const FlexContainer = styled.div`
  display: flex;
`
export const ContentContainer = styled(FlexContainer)`
  justify-content: space-between;
  width: 85vw;
`

export const StyledTextField = styled(TextField)`
  margin-bottom: 0.25em !important;
`
export const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
`
