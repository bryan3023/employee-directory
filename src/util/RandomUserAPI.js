import axios from 'axios'

const URL = 'https://randomuser.me/api/?nat=us&results=10'

const getDirectoryEntry = result => {
  return {
    name: `${result.name.first} ${result.name.last}`,
    thumbnail: result.picture.thumbnail,
    email: result.email,
    phone: result.phone,
    dob: new Date(result.dob.date)
  }
}


export default {
  getRandomUserSet() {
    return axios.get(URL)
  },

  getDirectoryEntries(results) {
    return results.data.results.map(r => getDirectoryEntry(r))
  }
}
