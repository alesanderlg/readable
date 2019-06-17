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

export const saveVoteScore = (id, option) =>
    axios.post(`/posts/${id}`, {
        option
    })
    .then(data => data)
    .catch((error) => {
         console.log(error)
     })

export const saveVoteScoreComments = (id, option) =>
    axios.post(`/comments/${id}`, {
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


export const getCommentsByPostId = (id) =>
    axios.get(`/posts/${id}/comments`)
            .then(data => data)
            .catch((error) => {
                console.log(error)
            })

export const saveComment = (comment) =>
    axios.post(`/comments`, {
        ...comment
      })
      .then(data => data)
      .catch((error) => {
          console.log(error)
      })

export const savePost = (post) =>
    axios.post(`/posts`, {
        ...post
      })
      .then(data => data)
      .catch((error) => {
          console.log(error)
      })

export const deletePost = (id) =>
    axios.delete(`/posts/${id}`)
           .then(data => data)
           .catch((error) => {
                console.log(error)
            })

export const updatePost = (id, post) =>
    axios.put(`/posts/${id}`, {
             ...post
         })
         .then(data => data)
         .catch((error) => {
            console.log(error)
         })

export const deleteComment = (id) =>
    axios.delete(`/comments/${id}`)
         .then(data => data)
         .catch((error) => {
            console.log(error)
          })

export const getCommentsById = (id) =>
    axios.get(`/comments/${id}`)
         .then(data => data)
         .catch((error) => {
            console.log(error)
         })

export const updateComment = (id, comment) =>
    axios.put(`/comments/${id}`, {
            ...comment
            })
            .then(data => data)
            .catch((error) => {
                 console.log(error)
            })
      