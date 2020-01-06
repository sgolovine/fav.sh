/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from 'react'
import PropTypes from 'prop-types'

export default class FileUploader extends React.Component {
  fileInput = null

  setFileInput = element => {
    this.fileInput = element
  }

  clickInput = () => {
    const element = this.fileInput
    element.value = ''
    element.click()
  }

  handleFiles = event => {
    const file = event.target.files[0]
    const fr = new FileReader()
    fr.onloadend = () => {
      const content = fr.result
      this.props.handleFiles(content)
    }
    fr.readAsText(file)
  }

  render() {
    return (
      <>
        <input
          type="file"
          onChange={this.handleFiles}
          accept=".json"
          className="react-file-reader-input"
          ref={this.setFileInput}
          multiple={false}
          style={{
            width: '0px',
            opacity: '0',
            position: 'fixed',
          }}
        />

        <div onClick={this.clickInput}>
          {this.props.children}
        </div>
      </>
    )
  }
}

FileUploader.propTypes = {
  handleFiles: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}
