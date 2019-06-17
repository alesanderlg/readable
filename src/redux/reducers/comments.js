import * as actionTypes from '../actions/index'
import { updateVoteScoreComment } from '../../utils/commonUtils'

const initialState = {
    comments: [],
    comment: {}
}

export default function comments (state = initialState, action ){
    switch(action.type){
        case actionTypes.LOAD_COMMENTS_BY_POST_ID:
            return {
                ...state,
                comments: action.payload
            }
        case actionTypes.TOGGLE_VOTE_SCORE_COMMENTS:
            return {
                ...state,
                comments: [...updateVoteScoreComment(state, action.payload)]
            }
        case actionTypes.SAVE_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.payload)
            }
        case actionTypes.DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload.id)
            }
        case  actionTypes.LOAD_COMMENT_BY_ID:
            return {
                ...state,
                comment: action.payload
            }
        case actionTypes.EDIT_COMMENT:
            return {
                ...state,
            }
        default:
            return state
    }
}