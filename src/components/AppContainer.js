import React from 'react'

function AppContainer(props) {
  return (<>
    <div class="container">
      {props.children}
    </div>
  </>)
}

export default AppContainer