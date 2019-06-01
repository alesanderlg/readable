import { 
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS, 
    LOAD_POSTS_BY_CATEGORY 
} from '../actions/index'


const initialState = {
    data: [],
    isFetching: false
}

export default function posts (state = initialState, action) {
    if(action.type === LOAD_POSTS_REQUEST){
        return{
            isFetching: true,
            data: []
        }
    }else if(action.type === LOAD_POSTS_SUCCESS){
        return {
            isFetching: false,
            ...action.payload,
        }
    }else if(action.type === LOAD_POSTS_BY_CATEGORY){
        console.log("LOAD_POSTS_BY_CATEGORY", action.payload)
        return {
            ...state,
            ...action.payload
        }
    }else{
        return state
    }

}