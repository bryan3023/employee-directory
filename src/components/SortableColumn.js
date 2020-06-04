import React from 'react'

function SortableColumn(props) {

  const renderSortIndicator = () =>{
    const
      isActive = props.sortColumn === props.name,
      sortText = props.sortAscending ? '⬆' : '⬇'

    return isActive ? <span>{sortText}</span> : null
  }

  return (
    <th scope="col" onClick={() => props.handleSortChange(props.name)} className="sortable">
      {props.text} {renderSortIndicator()}
    </th>
  )
}

export default SortableColumn
