import React from 'react'

function ColumnSorter(props) {
  const sortText = props.sortAscending ? '⬆' : '⬇'
  return props.isActive ? <span>{sortText}</span> : null
}

export default ColumnSorter