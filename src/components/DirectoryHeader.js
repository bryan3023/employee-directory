import React from 'react'

import ColumnSorter from './ColumnSorter'

function DirectoryHeader(props) {
  const columnSort = (name) => {
    const isActive = props.sortColumn === name
    return (
      <ColumnSorter
        name={name}
        sortAscending={props.sortAscending}
        isActive={isActive}
      />
    )}

  return (
    <thead>
      <tr>

        <th scope="col">
          <span className="sr-only">Photo</span>
        </th>

        <th scope="col" onClick={() => props.updateSort('name')}>
          Name {columnSort("name")}
        </th>

        <th scope="col" onClick={() => props.updateSort('phone')}>
          Phone Number {columnSort("phone")}
        </th>

        <th scope="col" onClick={() => props.updateSort('email')}>
          Email {columnSort("email")}
        </th>

        <th scope="col" onClick={() => props.updateSort('dob')}>
          DOB {columnSort("dob")}
        </th>

      </tr>
    </thead>
  )
}

export default DirectoryHeader
