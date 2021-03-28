import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-backendproject.herokuapp.com',
})

export default instance
