import * as actionTypes from '../actions/index'
import { updateVoteScorePost } from '../../utils/CommonUtils'

const initialState = {
    posts: [],
    isFetching: false,
    allPosts: [],
    post: {}
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
            return {
                ...state,
                posts: action.payload
            }
        case actionTypes.TOGGLE_VOTE_SCORE:
            return {
                ...state,
                posts: [...updateVoteScorePost(state, action.payload)]
            }
        case actionTypes.LOAD_POSTS_BY_ID:
            return {
                ...state,
                post: action.payload
            }
        case actionTypes.TOGGLE_VOTE_SCORE_POST_ITEM:
            return {
                ...state,
                post: action.payload
            }
        case actionTypes.UPDATE_COMMENT_COUNT:
            return {
                ...state,
                post: {
                    ...state.post,
                    commentCount: state.post.commentCount+1
                }
            }
        default:
            return state
    }

}