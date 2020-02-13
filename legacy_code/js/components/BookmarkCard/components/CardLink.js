import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/common/Button'
import styled from 'styled-components'

const buttonProps = {
  size: 'small',
  variant: 'outlined',
  target: '_blank',
  disableRipple: true,
  color: 'primary',
}

const CardLink = props => (
  <StyledButton {...buttonProps} href={props.href}>
    {props.href}
  </StyledButton>
)

CardLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default CardLink

const StyledButton = styled(Button)`
  padding-top: 0.05em !important;
  padding-bottom: 0.05em !important;
  margin-bottom: 0.5em;
  font-size: 11px !important;
`
