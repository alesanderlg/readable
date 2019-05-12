import axios from 'axios'

const baseURL = "http://localhost:3001"
const authorization = 'AUTH_TOKEN'
const contentType = 'application/json'

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = authorization;
axios.defaults.headers.post['Content-Type'] = contentType;
