/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getActiveTags,
  toggleTag,
} from 'store/modules/tags'
import { getAllTags } from 'store/modules/bookmarks'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import map from 'ramda/src/map'
import contains from 'ramda/src/contains'
import styled from 'styled-components'
import Star from '@material-ui/icons/Star'

const TagListItem = props => (
  <ListItem button onClick={props.onClick}>
    <ListItemText>{props.children}</ListItemText>
    {props.isActive && (
      <ListItemIcon>
        <Star />
      </ListItemIcon>
    )}
  </ListItem>
)

export const TagList = props => (
  <Container>
    <Typography variant="h5">Tags</Typography>
    <List>
      {map(
        (item, index) => (
          <TagListItem
            key={index}
            onClick={() => props.toggleTag(item)}
            isActive={contains(item, props.activeTags)}
          >
            {item}
          </TagListItem>
        ),
        props.tags
      )}
    </List>
  </Container>
)

TagListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  toggleTag: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  activeTags: getActiveTags(state),
  tags: getAllTags(state),
})

const mapDispatchToProps = {
  toggleTag,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)

const Container = styled.div`
  width: 15em;
  padding: 1em;
`
