import * as actionTypes from '../actions/index'

const initialState = {
    posts: [],
    isFetching: false,
    allPosts: []
}

export default function posts (state = initialState, action) {
    if(action.type === actionTypes.LOAD_POSTS_REQUEST){
        return{
            isFetching: true,
            posts: [],
            allPosts: []
        }
    }else if(action.type === actionTypes.LOAD_POSTS_SUCCESS){
        return {
            isFetching: false,
            posts: action.payload,
            allPosts: action.payload
        }
    }else if(action.type === actionTypes.LOAD_POSTS_BY_CATEGORY){
        return {
            ...state,
            posts: action.payload
        }
    }else{
        return state
    }

}