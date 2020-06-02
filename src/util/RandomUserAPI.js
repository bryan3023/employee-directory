import axios from 'axios'

const URL = 'https://randomuser.me/api/?nat=us&results=10'

export default {
  getRandomUserSet() {
    return axios.get(URL)
  }
}
