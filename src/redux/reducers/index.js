import { combineReducers } from 'redux'
import posts from '../reducers/posts'
import categories from '../reducers/categories'

export default combineReducers({
    posts,
    categories
})