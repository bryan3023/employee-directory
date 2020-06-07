import React from 'react'
import './App.css'

import AppHeader from './components/AppHeader'
import AppContainer from './components/AppContainer'
import SearchForm from './components/SearchForm'
import DirectoryTable from './components/DirectoryTable'
import DirectoryHeader from './components/DirectoryHeader'
import DirectoryBody from './components/DirectoryBody'
import DirectoryEntry from './components/DirectoryEntry'

import API from './util/RandomUserAPI'

class App extends React.Component {

  state = {
    directoryEntries: [],
    sortColumn: "name",
    sortAscending: false,
    search: ""
  }


  componentDidMount = () => {
    API.getRandomUserSet()
      .then(results => {
        const entries = API.getDirectoryEntries(results)
        this.setState({directoryEntries: entries})
      })
      .catch(error => console.error(error))
  }


  render = () => {
    return (<>
      <AppHeader />
      <AppContainer>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <DirectoryTable>
          <DirectoryHeader
            sortColumn={this.state.sortColumn}
            sortAscending={this.state.sortAscending}
            handleSortChange={this.handleSortChange}
          />
          <DirectoryBody>
            {this.state.directoryEntries
              .filter(this.matchNames)
              .sort(this.compareEntries)
              .map(entry => (
                <DirectoryEntry entry={entry} key={entry.name} />
              ))
            }
          </DirectoryBody>
        </DirectoryTable>
      </AppContainer>
    </>)
  }


  /*
    Update the search value based on what the user typed.
   */
  handleInputChange = event => {
    event.preventDefault()

    const {name, value} = event.target
    this.setState({[name]: value})
  }


  /*
    Change the table's row sort based on the column that was clicked.
   */
  handleSortChange = column => {
    if (column === this.state.sortColumn) {
      this.setState({sortAscending: !this.state.sortAscending})
    } else {
      this.setState({sortColumn: column})
    }
  }


  /*
    Given a full name, return true if any name begins with the current
    search string.
   */
  matchNames = ({name}) => {
    const
      search = this.state.search.trim().toLowerCase(),
      names = name.toLowerCase().split(/(-|\s)/),
      match = (accumulator, currentValue) =>
        accumulator || currentValue.startsWith(search)

    return names.reduce(match, false)
  }


  /*
    Compare directory entries and return a sortable value.

    Results depend on the current sorting column and direction.
   */
  compareEntries = (a,b) => {
    const
      property = this.state.sortColumn,
      direction = this.state.sortAscending ? -1 : 1

    if (property === 'dob') {
      return this.compareDates(a[property],b[property]) * direction
    } else {
      const
        normalizedA = a[property].toLowerCase(),
        normalizedB = b[property].toLowerCase()

      return normalizedA.localeCompare(normalizedB) * direction
    }
  }


  /*
    Compare dates and return a sortable value.
   */
  compareDates = (a,b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }
}

export default App
