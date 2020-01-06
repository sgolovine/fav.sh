/** Search component that goes in the main header */
/**
 * Base code taken from MUI docs
 * https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/app-bar/PrimarySearchAppBar.js
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  updateSearch,
  getSearchTerm,
} from 'store/modules/search'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(
        theme.palette.common.white,
        0.25
      ),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const HeaderSearch = props => {
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoFocus
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Search' }}
        value={props.searchTerm}
        onChange={e => props.updateSearch(e.target.value)}
      />
    </div>
  )
}

HeaderSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state),
})

const mapDispatchToProps = {
  updateSearch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderSearch)
