import React from 'react'
import './App.css'

import AppHeader from './components/AppHeader'
import AppContainer from './components/AppContainer'
import SearchForm from './components/SearchForm'
import DirectoryBody from './components/DirectoryBody'
import DirectoryTable from './components/DirectoryTable'
import DirectoryHeader from './components/DirectoryHeader'

import API from './util/RandomUserAPI'
import DirectoryEntry from './components/DirectoryEntry'

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
        console.log(results)
        this.setState({directoryEntries: results.data.results})
      })
      .catch(error => console.error(error))
  }


  render = () => {
    return (<>
      <AppHeader />
      <AppContainer>
        <SearchForm />
        <DirectoryTable>
          <DirectoryHeader />
          <DirectoryBody>
            {this.state.directoryEntries.map(entry => (<>
              <DirectoryEntry />
            </>))}
          </DirectoryBody>
        </DirectoryTable>
      </AppContainer>
    </>)
  }
}

export default App
