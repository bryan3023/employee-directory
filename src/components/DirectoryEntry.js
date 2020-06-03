import React from 'react'
import Moment from 'react-moment'

function DirectoryEntry({entry}) {
  const
    thumbnailAlt = `${entry.name}'s photo`

  return (
    <tr>
      <td><img src={entry.thumbnail} alt={thumbnailAlt} /></td>
      <td>{entry.name}</td>
      <td>{entry.phone}</td>
      <td><a href="mailto:{entry.email}">{entry.email}</a></td>
      <td><Moment format="MM-DD-YYYY">{entry.dob}</Moment></td>
    </tr>
  )
}

export default DirectoryEntry
