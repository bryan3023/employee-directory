import React from 'react'

function AppHeader(props) {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">Click on a column to change the order or search to narrow the results.</p>
    </div>
  )
}

export default AppHeader