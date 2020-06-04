import React from 'react'

import SortableColumn from './SortableColumn'

function DirectoryHeader(props) {

  const renderSortableColumn = (name, text) =>
    <SortableColumn
      name={name}
      text={text}
      sortColumn={props.sortColumn}
      sortAscending={props.sortAscending}
      handleSortChange={props.handleSortChange}
    />

  return (
    <thead>
      <tr>

        <th scope="col">
          <span className="sr-only">Photo</span>
        </th>

        {renderSortableColumn('name', 'Name')}
        {renderSortableColumn('phone', 'Phone Number')}
        {renderSortableColumn('email', 'Email')}
        {renderSortableColumn('dob', 'Date of Birth')}

      </tr>
    </thead>
  )
}

export default DirectoryHeader
