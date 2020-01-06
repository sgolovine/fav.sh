import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button, {
  IconButton,
} from 'components/common/Button'
import {
  addTag,
  removeTag,
  getTags,
} from 'store/modules/draft'
import { getAllTags } from 'store/modules/bookmarks'
import { toastShow } from 'store/modules/toast'
import { checkString } from 'util/empty'
import map from 'ramda/src/map'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import uuid from 'uuid/v1'

class Tags extends React.PureComponent {
  state = {
    customTagValue: '',
    anchorEl: null,
  }

  handleMenuClick = e =>
    this.setState({
      anchorEl: e.currentTarget,
    })

  handleClose = () =>
    this.setState({
      anchorEl: null,
    })

  handleTagFieldChange = e =>
    this.setState({
      customTagValue: e.target.value,
    })

  handleAdd = () => {
    const { addTag, toastShow } = this.props
    const { customTagValue } = this.state
    if (!checkString(customTagValue)) {
      toastShow('Tags: no value provided')
      return
    }
    addTag(customTagValue)
    this.setState({
      customTagValue: '',
    })
  }

  handleDelete = item => {
    const { removeTag } = this.props
    removeTag(item)
  }

  handleExistingItemClick = tag => {
    const { addTag, toastShow } = this.props
    if (!checkString(tag)) {
      toastShow('Tags: no value provided')
      return
    }
    addTag(tag)
    this.handleClose()
  }

  renderExistingTagMenu = () => {
    const ITEM_HEIGHT = 75
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const { existingTags } = this.props
    return (
      <>
        <StyledButton
          color="primary"
          onClick={this.handleMenuClick}
          aria-label="other-tags"
          aria-owns={open ? 'long-menu' : undefined}
          disabled={existingTags.length === 0}
        >
          Other Tags
        </StyledButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {existingTags.map(tag => (
            <MenuItem
              key={uuid()}
              onClick={() =>
                this.handleExistingItemClick(tag)
              }
            >
              {tag}
            </MenuItem>
          ))}
        </Menu>
      </>
    )
  }

  renderTagList = () => {
    const { tags } = this.props
    if (tags.length > 0) {
      return (
        <List>
          {map(
            (item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
                <IconButton
                  label="delete"
                  onClick={() => this.handleDelete(item)}
                  icon={<DeleteIcon />}
                />
              </ListItem>
            ),
            tags
          )}
        </List>
      )
    }
    return null
  }

  render() {
    const { customTagValue } = this.state
    return (
      <Container>
        <Typography variant="subtitle2">
          Add Tags (Optional)
        </Typography>
        <UpperContainer>
          <TextField
            value={customTagValue}
            onChange={this.handleTagFieldChange}
            placeholder="Tag Name"
          />
          <StyledButton
            onClick={this.handleAdd}
            color="primary"
          >
            Add Tag
          </StyledButton>
          {this.renderExistingTagMenu()}
        </UpperContainer>
        {this.renderTagList()}
      </Container>
    )
  }
}

Tags.propTypes = {
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  toastShow: PropTypes.func.isRequired,
  existingTags: PropTypes.array.isRequired,
}

Tags.defaultProps = {
  tags: [],
}

const mapStateToProps = state => ({
  tags: getTags(state),
  existingTags: getAllTags(state),
})

const mapDispatchToProps = {
  addTag,
  removeTag,
  toastShow,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags)

const Container = styled.div`
  padding-top: 1em;
  padding-left: 0.5em;
  display: flex;
  flex-direction: column;
`

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledButton = styled(Button)`
  margin-left: 0.25em !important;
  margin-right: 0.25em !important;
`
