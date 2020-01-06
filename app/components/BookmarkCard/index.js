/* eslint camelcase: 0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import CardActions from './components/Actions'
import SectionContainer from './components/SectionContatiner'
import CardTitle from './components/CardTitle'
import CardDescription from './components/CardDescription'
import Categories from './components/Categories'
import CardMeta from './components/CardMeta'
import CardLink from './components/CardLink'

import styled from 'styled-components'

function BookmarkCard(props) {
  const [expanded, setExpanded] = useState(false)
  const [hovering, setHover] = useState(false)
  const { name, href, desc, tags, meta } = props

  const Icon = () => (
    <IconButton onClick={() => setExpanded(!expanded)}>
      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </IconButton>
  )

  /** Always Displayed */
  const MainContent = () => (
    <SlimCardContent>
      <CardTitle
        windowWidth={window.innerWidth}
        name={name}
        href={href}
        expanded={expanded}
      />
      <div>
        {hovering && <CardActions guid={meta.guid} />}
        <Icon />
      </div>
    </SlimCardContent>
  )

  /** Displayed in Expanded Mode */
  const ExpandedContent = () => (
    <CardContent>
      {href && <CardLink href={props.href} />}
      {desc && (
        <SectionContainer title="Description">
          <CardDescription desc={desc} />
        </SectionContainer>
      )}
      {tags.length > 0 && (
        <SectionContainer title="Tags">
          <Categories categories={tags} />
        </SectionContainer>
      )}
      {meta && (
        <SectionContainer title="Metadata">
          <CardMeta
            guid={meta.guid || undefined}
            createdOn={meta.createdOn || undefined}
            modifiedOn={meta.modifiedOn || undefined}
          />
        </SectionContainer>
      )}
    </CardContent>
  )

  return (
    <StyledCard
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <MainContent />
      {expanded && <ExpandedContent />}
    </StyledCard>
  )
}

BookmarkCard.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.array,
  meta: PropTypes.shape({
    guid: PropTypes.string,
    createdOn: PropTypes.string,
    modifiedOn: PropTypes.string,
  }),
  desc: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

BookmarkCard.defaultProps = {
  desc: '',
  tags: [],
  meta: undefined,
}

const StyledCard = styled(Card)`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  flex-grow: 1;
`

const SlimCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-between
  padding: 10px !important;
`

export default withRouter(BookmarkCard)
