import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton } from 'components/common/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'

const PageHeader = props => (
  <Toolbar>
    <IconButton
      label="Go Back"
      component={Link}
      to="/"
      icon={<ArrowBack />}
    />
    <Typography variant="h6" color="inherit">
      {props.label}
    </Typography>
  </Toolbar>
)

PageHeader.propTypes = {
  label: PropTypes.string.isRequired,
}

export default PageHeader
