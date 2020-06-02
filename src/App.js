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
        const entries = results.data.results.map(e => { return {
          name: `${e.name.first} ${e.name.last}`,
          thumbnail: e.picture.thumbnail,
          email: e.email,
          phone: e.phone,
          dob: new Date(e.dob.date)
        }})
        console.log(entries)
        this.setState({directoryEntries: entries})
      })
      .catch(error => console.error(error))
  }

  handleInputChange = event => {
    event.preventDefault()

    const {name, value} = event.target
    this.setState({[name]: value})
  }

  searchNames = ({name}) => {
    const
      search = this.state.search.trim().toLowerCase(),
      [first, last] = name.toLowerCase().split(" ")

    return first.startsWith(search)
      || last.startsWith(search)
  }


  compareDates = (a,b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  compareEntries = (a,b) => {
    const
      property = this.state.sortColumn,
      direction = this.state.sortAscending ? -1 : 1

    if (property === 'dob') {
      return this.compareDates(a[property],b[property]) * direction
    }

    const
      canonicalA = a[property].toLowerCase(),
      canonicalB = b[property].toLowerCase()

    return canonicalA.localeCompare(canonicalB) * direction
  }

  updateSort = column => {
    if (column === this.state.sortColumn) {
      this.setState({sortAscending: !this.state.sortAscending})
    } else {
      this.setState({sortColumn: column})
    }
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
            updateSort={this.updateSort}
            />
          <DirectoryBody>
            {this.state.directoryEntries
              .filter(entry => this.searchNames(entry))
              .sort(this.compareEntries)
              .map((entry, key) => {
                return (<>
                  <DirectoryEntry entry={entry} key={key} />
                </>)})}
          </DirectoryBody>
        </DirectoryTable>
      </AppContainer>
    </>)
  }
}

export default App
