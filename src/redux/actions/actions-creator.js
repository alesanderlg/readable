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

const toggleVoteScorePost = ({ data }) =>{
    return {
        type: actionTypes.TOGGLE_VOTE_SCORE,
        payload: data
    }
}

const toggleVoteScoreComments = ({ data }) =>{
    return {
        type: actionTypes.TOGGLE_VOTE_SCORE_COMMENTS,
        payload: data
    }
}

const toggleVoteScorePostItem = ({ data }) =>{
    return {
        type: actionTypes.TOGGLE_VOTE_SCORE_POST_ITEM,
        payload: data
    }
}

const loadPostsByIdSuccess = ({ data }) =>{
    return {
        type: actionTypes.LOAD_POSTS_BY_ID,
        payload: data
    }
}

const loadCommentsByPostIdSuccess = ({ data }) =>{
    return {
        type: actionTypes.LOAD_COMMENTS_BY_POST_ID,
        payload: data
    }
}

const saveComment = (data) =>{
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: data
    }
}

const updateCommentsCount = () =>{
    return {
        type: actionTypes.UPDATE_COMMENT_COUNT
    }
}

const savePost = (data) => {
    return {
        type: actionTypes.ADD_POST,
        payload: data
    }
}

const deletePost = (id) =>{
    return {
        type: actionTypes.DELETE_POST,
        id
    }
}

const deleteComment = ({ data }) =>{
    return {
        type: actionTypes.DELETE_COMMENT,
        payload: data
    }
}

const updatePost = (post) =>{
    return {
        type: actionTypes.EDIT_POST,
        payload: post
    }
}

const loadCommentById = ({data}) =>{
    return {
        type: actionTypes.LOAD_COMMENT_BY_ID,
        payload: data
    }
}

const updateComment = (data) =>{
    return {
        type: actionTypes.EDIT_COMMENT,
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
        return api.saveVoteScore(id, option)
                  .then((data) =>{
                    dispatch(toggleVoteScorePost(data))
                  })
    }
}

export const handleToggleVoteScoreComments = (id, option) =>{
    return (dispatch) =>{
        return api.saveVoteScoreComments(id, option)
                  .then((data) =>{
                    dispatch(toggleVoteScoreComments(data))
                  })
    }
}

export const handleToggleVoteScorePostItem = (id, option) =>{
    return (dispatch) =>{
        return api.saveVoteScore(id, option)
        .then((data) =>{
          dispatch(toggleVoteScorePostItem(data))
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

export const loadCommentsByPostId = (id) =>{
    return (dispatch) =>{
        return api.getCommentsByPostId(id)
                .then((data) =>{
                    dispatch(loadCommentsByPostIdSuccess(data))
                })
    }
}

export const handleSaveComment = (comment) =>{
    return (dispatch) =>{
        return api.saveComment(comment)
                  .then((data) =>{
                      dispatch(saveComment(comment))
                  })
    }
}

export const handleUpdateCommentsCount = () =>{
    return (dispatch) => dispatch(updateCommentsCount())
}

export const handleSavePost = (post) =>{
    return (dispatch) =>{
        return api.savePost(post)
                  .then((post) =>{
                      dispatch(savePost(post))
                  })
    }
}

export const handleDeletePost = (id) =>{
    return (dispatch) =>{
        return api.deletePost(id)
                  .then((id) =>{
                    dispatch(deletePost(id))
                  })
    }
}

export const handleEditPost = (id, post) =>{
    return (dispatch) =>{
        return api.updatePost(id, post)
                .then((post) =>{
                    dispatch(updatePost(post))
                })
    }
} 

export const handleDeleteComment = (id) =>{
    return (dispatch) =>{
        return api.deleteComment(id)
                  .then((data) =>{
                    dispatch(deleteComment(data))
                  })
    }
}

export const handleLoadCommentById = (id) =>{
    return (dispatch) =>{
        return api.getCommentsById(id)
                  .then((data) =>{
                    dispatch(loadCommentById(data))
                  })
    }
}

export const handleEditComment = (id, comment) =>{
    return (dispatch) =>{
        return api.updateComment(id, comment)
                .then((data) =>{
                    dispatch(updateComment(data))
                })
    }
} 



