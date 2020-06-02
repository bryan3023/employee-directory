import React from 'react'

function SearchForm(props) {
  return (<>
    <div className="row mb-3">
      <div className="col-12 col-md-6 offset-md-3">
        <form className="form-group">
          <label htmlFor="search" className="sr-only">Type a name to filter results:</label>
          <input
            name="search"
            value={props.search}
            type="text"
            onChange={props.handleInputChange}
            placeholder="Type a name to filter results"
            autoComplete="off"
            className="form-control"
          />
        </form>
      </div>
    </div>
  </>)
}

export default SearchForm