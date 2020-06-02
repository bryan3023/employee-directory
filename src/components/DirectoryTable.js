import React from 'react'

function DirectoryTable(props) {
  return (<>
    <div className="row">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
            {props.children}
          </table>
        </div>
      </div>
    </div>
  </>)
}

export default DirectoryTable