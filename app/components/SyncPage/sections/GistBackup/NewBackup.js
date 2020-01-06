import React from 'react'
import PropTypes from 'prop-types'
import {
  FlexContainer,
  TextFieldContainer,
  StyledTextField,
} from './styled'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const NewBackup = ({
  descriptionValue,
  setDescription,
  filenameValue,
  setFilename,
  visibilityValue,
  setVisibility,
}) => (
  <FlexContainer>
    <TextFieldContainer>
      <StyledTextField
        variant="outlined"
        placeholder="Gist Description"
        value={descriptionValue}
        onChange={e => setDescription(e.target.value)}
      />
      <StyledTextField
        variant="outlined"
        placeholder="Gist Filename (optional)"
        value={filenameValue}
        onChange={e => setFilename(e.target.value)}
      />
    </TextFieldContainer>
    <RadioGroup
      aria-label="visibility"
      name="visibility-group"
      value={visibilityValue}
      onChange={e => setVisibility(e.target.value)}
    >
      <FormControlLabel
        value="private"
        control={<Radio />}
        label="Private"
      />
      <FormControlLabel
        value="public"
        control={<Radio />}
        label="Public"
      />
    </RadioGroup>
  </FlexContainer>
)

NewBackup.propTypes = {
  descriptionValue: PropTypes.string.isRequired,
  filenameValue: PropTypes.string.isRequired,
  visibilityValue: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  setFilename: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
}
