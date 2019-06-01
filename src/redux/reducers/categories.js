import { RECEIVE_CATEGORIES } from '../actions/index'

export default function categories (state = [], action) {
    switch(action.type){
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}