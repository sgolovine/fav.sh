import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { PaddedIcon } from './GithubLoginButton'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const SyncSection = props => (
  <ExpansionPanel disabled={props.disabled}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>
        {props.github && <PaddedIcon icon={faGithub} />}
        {props.header}
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      {props.children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

SyncSection.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
  github: PropTypes.bool,
  disabled: PropTypes.bool,
}

SyncSection.defaultProps = {
  header: 'Hey, give me a header',
  children: <p>Nothing here</p>,
  github: false,
  disabled: false,
}

export default SyncSection
