/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const CardDescription = props => (
  <Typography variant="subtitle1">{props.desc}</Typography>
)

CardDescription.propTypes = {
  desc: PropTypes.string.isRequired,
}

export default CardDescription
