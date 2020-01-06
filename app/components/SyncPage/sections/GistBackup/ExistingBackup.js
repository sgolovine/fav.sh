import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexContainer,
  TextFieldContainer,
  StyledTextField,
} from './styled'

export const ExistingBackup = ({
  gistIdValue,
  setGistId,
  filenameValue,
  setFilename,
}) => (
  <FlexContainer>
    <TextFieldContainer>
      <StyledTextField
        variant="outlined"
        placeholder="Gist ID (required)"
        value={gistIdValue}
        onChange={e => setGistId(e.target.value)}
      />
      <StyledTextField
        variant="outlined"
        placeholder="Gist Filename (required)"
        value={filenameValue}
        onChange={e => setFilename(e.target.value)}
      />
    </TextFieldContainer>
  </FlexContainer>
)

ExistingBackup.propTypes = {
  gistIdValue: PropTypes.string.isRequired,
  setGistId: PropTypes.func.isRequired,
  filenameValue: PropTypes.string.isRequired,
  setFilename: PropTypes.func.isRequired,
}
