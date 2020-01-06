/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const HeaderButton = props => (
  <IconButton
    className={props.classes.menuButton}
    color="inherit"
    aria-label={props.ariaLabel}
    onClick={props.onClick}
  >
    {props.active ? props.activeIcon : props.iconComponent}
  </IconButton>
)

HeaderButton.propTypes = {
  classes: PropTypes.object.isRequired,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  iconComponent: PropTypes.node.isRequired,
  active: PropTypes.bool,
  activeIcon: PropTypes.node,
}

HeaderButton.defaultProps = {
  active: false,
  activeIcon: undefined,
}

HeaderButton.defaultProps = {
  ariaLabel: 'no-label',
}

export default withStyles(styles)(HeaderButton)
