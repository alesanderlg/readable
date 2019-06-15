import * as actionTypes from '../actions/index'
import { updateVoteScoreComment } from '../../utils/CommonUtils'

const initialState = {
    comments: []
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
            console.log("SAVE_COMMENT", state)
            return {
                ...state,
                comments: state.comments.concat(action.payload)
            }
        default:
            return state
    }
}