import { combineReducers } from 'redux'
import posts from '../reducers/posts'
import categories from '../reducers/categories'
import comments from '../reducers/comments'

export default combineReducers({
    postReducer: posts,
    categoryReducer: categories,
    commentsReducer: comments
})