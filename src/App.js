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
    sortColumn: "",
    sortDirection: "",
    search: ""
  }

  componentDidMount = () => {
    API.getRandomUserSet()
      .then(results => {
        this.setState({directoryEntries: results.data.results})
      })
      .catch(error => console.error(error))
  }

  handleInputChange = event => {
    event.preventDefault()

    const {name, value} = event.target
    this.setState({[name]: value})
  }

  searchNames = ({name}) => {
    const search = this.state.search.trim().toLowerCase()
    return name.last.toLowerCase().startsWith(search)
      || name.first.toLowerCase().startsWith(search)
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
          <DirectoryHeader />
          <DirectoryBody>
            {this.state.directoryEntries
              .filter(entry => this.searchNames(entry))
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
