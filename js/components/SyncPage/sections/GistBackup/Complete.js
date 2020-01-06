import React from 'react'
import PropTypes from 'prop-types'
import { CompletedContainer, FlexContainer } from './styled'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const CompleteCard = ({
  gistId,
  url,
  onDisconnect,
  onUpdate,
}) => (
  <CompletedContainer>
    <Typography variant="subtitle1">
      Your bookmarks have been backed up
    </Typography>
    <Typography as="subtitle1">
      Gist ID: {gistId}
    </Typography>
    <FlexContainer>
      <Button
        variant="flat"
        color="primary"
        href={url}
        target="_blank"
      >
        Open in Github
      </Button>
      <Button
        variant="flat"
        color="primary"
        onClick={onUpdate}
      >
        Update
      </Button>
      <Button
        variant="flat"
        color="primary"
        onClick={onDisconnect}
      >
        Disconnect
      </Button>
    </FlexContainer>
  </CompletedContainer>
)

CompleteCard.propTypes = {
  gistId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onDisconnect: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}
