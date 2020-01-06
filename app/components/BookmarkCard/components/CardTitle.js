/* eslint no-confusing-arrow: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const CardTitle = props => {
  const { expanded, windowWidth } = props
  const [hover, setHover] = useState(false)
  return (
    <Container>
      <Title
        windowwidth={windowWidth}
        ishovering={hover && hover}
        color="textPrimary"
        variant="h6"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        component="a"
        href={props.href}
        target="_blank"
      >
        {props.name}
      </Title>
      {(hover || expanded) && windowWidth > 1000 && (
        <LeftPadTypography>{props.href}</LeftPadTypography>
      )}
    </Container>
  )
}

CardTitle.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number.isRequired,
}

export default CardTitle

const Container = styled.div`
  display: flex;
  align-items: baseline;
`
const LeftPadTypography = styled(Typography)`
  margin-left: 1em !important;
`

const Title = styled(Typography)`
  font-size: 1rem !important;
  text-decoration: none;
  color: ${props =>
    props.ishovering ? '#3949AB' : 'unset'} !important;
`
