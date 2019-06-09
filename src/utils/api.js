import axios from 'axios'

const baseURL = "http://localhost:3001"
const authorization = 'AUTH_TOKEN'
const contentType = 'application/json'

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] = authorization;
axios.defaults.headers.post['Content-Type'] = contentType;

export const getPosts = () =>
    axios.get('/posts')
         .then(data => data)
         .catch((error) => {
          console.log(error)
         })

export const getPostsByCategory = (category) =>
    axios.get(`${category}/posts`)
         .then(data => data)
         .catch((error) => {
          console.log(error)
        })

export const getCategories = () =>
    axios.get('/categories')
         .then(data => data)
         .catch((error) => {
              console.log(error)
          })

export const voteScore = (id, option) =>
    axios.post(`/posts/${id}`, {
        option
    })
    .then(data => data)
    .catch((error) => {
         console.log(error)
     })

export const getPostsById = (id) =>
     axios.get(`/posts/${id}`)
           .then(data => data)
           .catch((error) => {
            console.log(error)
           })
