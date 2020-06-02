import React from 'react'

function DirectoryHeader(props) {
  //⬆ ⬇

  return (<>
    <thead>
      <tr>
        <th scope="col"><span className="sr-only">Thubmnail</span></th>
        <th scope="col">Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  </>)
}

export default DirectoryHeader
