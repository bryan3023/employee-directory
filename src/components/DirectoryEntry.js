import React from 'react'
import Moment from 'react-moment'

function DirectoryEntry({entry}) {
  const
    name = `${entry.name.first} ${entry.name.last}`,
    thumbnail = entry.picture.thumbnail,
    thumbnailAlt = `${name}'s photo`

  return (<>
    <tr key="props.key">
      <td><img src={thumbnail} alt={thumbnailAlt} /></td>
      <td>{name}</td>
      <td>{entry.phone}</td>
      <td><a href="mailto:{entry.email}">{entry.email}</a></td>
      <td><Moment format="MM-DD-YYYY">{entry.dob.date}</Moment></td>
    </tr>
  </>)
}

export default DirectoryEntry
