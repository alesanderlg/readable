import * as actionTypes from './index'

import * as api from '../../utils/api'

const loadPostsSuccess = ({ data }) => {
    return {
        type: actionTypes.LOAD_POSTS_SUCCESS,
        payload: data,
    }
}

const loadPostsRequest = () =>{
    return {
        type: actionTypes.LOAD_POSTS_REQUEST,
    }
}

const loadPostByCategory = ({ data }) => {
    return {
        type: actionTypes.LOAD_POSTS_BY_CATEGORY,
        payload: data,
    }
}

const receiveCategories = (categories) =>{
    return {
        type: actionTypes.RECEIVE_CATEGORIES,
        payload: categories,
    }
}

const toggleVoteScore = ({ data }) =>{
    return {
        type: actionTypes.TOGGLE_VOTE_SCORE,
        payload: data
    }
}

const loadPostsByIdSuccess = ({ data }) =>{
    return {
        type: actionTypes.LOAD_POSTS_BY_ID,
        payload: data
    }
}

export const loadPosts = () =>{
    return (dispatch) =>{
        dispatch(loadPostsRequest())
        return api.getPosts()
                  .then((data) => {
                    dispatch(loadPostsSuccess(data))
                  })
    }
}

export const loadPostsByCategory = (category) =>{
    return (dispatch) =>{
        return api.getPostsByCategory(category)
                  .then((data) => {
                    dispatch(loadPostByCategory(data))
                  })
    }
}

export const loadCategories = () =>{
    return (dispatch) =>{
        return api.getCategories()
                  .then((data) =>{
                    dispatch(receiveCategories(data))
                   })
    }
}

export const handleToggleVoteScore = (id, option) =>{
    return (dispatch) =>{
        return api.voteScore(id, option)
                  .then((data) =>{
                    dispatch(toggleVoteScore(data))
                  })
    }
}

export const loadPostsById = (id) =>{
    return (dispatch) =>{
        return api.getPostsById(id)
                  .then((data) =>{
                      dispatch(loadPostsByIdSuccess(data))
                  })
    }
}



