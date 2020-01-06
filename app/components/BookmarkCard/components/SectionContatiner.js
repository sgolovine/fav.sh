/**
 * Section Container:
 * This container wraps all sections in the bookmark card
 * Provides the header and content indentation
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export default function SectionContainer(props) {
  return (
    <MainContainer>
      <Typography variant="subtitle1">
        {props.title}
      </Typography>
      <ContentContainer>{props.children}</ContentContainer>
    </MainContainer>
  )
}

SectionContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

SectionContainer.defaultProps = {
  title: 'Set a Title',
  children: <p>Set some content</p>,
}

const MainContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const ContentContainer = styled.div`
  margin-left: 2.5em;
`
