import React from 'react'
import PropTypes from 'prop-types'
import MUIButton from '@material-ui/core/Button'
import MUIIconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
    <MUIButton
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </MUIButton>
  )
}

function LinkButton(props) {
  return (
    <Button component={Link} to={props.to} {...props}>
      {props.children}
    </Button>
  )
}

function IconButton(props) {
  return (
    <MUIIconButton
      onClick={props.onClick}
      color="inherit"
      {...props}
    >
      {props.icon}
    </MUIIconButton>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node.isRequired,
}

IconButton.defaultProps = {
  onClick: () => {},
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
}

Button.defaultProps = {
  variant: 'outlined',
  color: 'primary',
  onClick: () => ({}),
}

export { LinkButton, IconButton }
export default Button
