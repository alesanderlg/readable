import { LOAD_POSTS_REQUEST, 
         LOAD_POSTS_SUCCESS,
         LOAD_POSTS_BY_CATEGORY,
         RECEIVE_CATEGORIES 
} from './index'

import { getPosts, 
         getPostsByCategory,
         getCategories 
} from '../../utils/api'

const loadPostsSuccess = ({ data }) => {
    return {
        type: LOAD_POSTS_SUCCESS,
        payload: data,
    }
}

const loadPostsRequest = () =>{
    return {
        type: LOAD_POSTS_REQUEST,
    }
}

const loadPostByCategory = ({ data }) => {
    return {
        type: LOAD_POSTS_BY_CATEGORY,
        payload: data,
    }
}

const receiveCategories = (categories) =>{
    return {
        type: RECEIVE_CATEGORIES,
        payload: categories,
    }
}

export const loadPosts = () =>{
    return (dispatch) =>{
        dispatch(loadPostsRequest())
        return getPosts()
            .then((data) => {
                dispatch(loadPostsSuccess(data))
            })
    }
}

export const loadPostsByCategory = (category) =>{
    return (dispatch) =>{
        return getPostsByCategory(category)
            .then((data) => {
                dispatch(loadPostByCategory(data))
            })
    }
}

export const loadCategories = () =>{
    return (dispatch) =>{
        return getCategories()
            .then((data) =>{
                dispatch(receiveCategories(data))
            })
    }
}



