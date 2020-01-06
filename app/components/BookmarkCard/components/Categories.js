import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import map from 'ramda/src/map'
import styled from 'styled-components'
import uuid from 'uuid/v1'

const Categories = props => {
  const { categories } = props
  return map(
    category => (
      <StyledChip key={uuid()} label={category} />
    ),
    categories
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
}

export default Categories

const StyledChip = styled(Chip)`
  margin-left: 0.25em;
  margin-right: 0.25em;
`
