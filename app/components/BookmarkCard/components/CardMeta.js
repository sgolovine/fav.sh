import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableItem = ({ label, value }) => (
  <Row>
    <LabelCol>{label}</LabelCol>
    <ValueCol>{value}</ValueCol>
  </Row>
)

const CardMeta = props => {
  const { guid, createdOn, modifiedOn } = props
  const renderGuid = guid && (
    <TableItem label="GUID" value={guid} />
  )
  const renderCreatedOn = createdOn && (
    <TableItem label="CREATED ON" value={createdOn} />
  )
  const renderModifiedOn = modifiedOn && (
    <TableItem label="MODIFIED ON" value={modifiedOn} />
  )
  return (
    <table>
      <tbody>
        {renderGuid}
        {renderCreatedOn}
        {renderModifiedOn}
      </tbody>
    </table>
  )
}

TableItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

CardMeta.propTypes = {
  guid: PropTypes.string,
  createdOn: PropTypes.string,
  modifiedOn: PropTypes.string,
}

CardMeta.defaultProps = {
  guid: undefined,
  createdOn: undefined,
  modifiedOn: undefined,
}

export default CardMeta

const Row = styled.tr`
  height: 1.5em;
`

const LabelCol = styled.td`
  padding-right: 2.5em;
  font-size: 0.85em;
  font-family: 'Roboto';
  color: #424242;
`
const ValueCol = styled.td`
  color: #424242;
`
