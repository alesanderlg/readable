import * as actionTypes from '../actions/index'
import { updateObject } from '../../utils/CommonUtils'

const initialState = {
    posts: [],
    isFetching: false,
    allPosts: []
}

export default function posts (state = initialState, action) {
    switch(action.type){
        case actionTypes.LOAD_POSTS_REQUEST:
            return{
                ...state,
                isFetching: true,
                posts: [],
                allPosts: []
            }
        case actionTypes.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload,
                allPosts: action.payload
            }
        case actionTypes.LOAD_POSTS_BY_CATEGORY:
            console.log("LOAD_POSTS_BY_CATEGORY", action.payload)
            return {
                ...state,
                posts: action.payload
            }
        case actionTypes.TOGGLE_VOTE_SCORE:
            return {
                ...state,
                posts: [...updateObject(state, action.payload)]
            }
        default:
            return state
    }

}