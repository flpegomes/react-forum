import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import postsReducer from './postsReducer'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    loadingBar: loadingBarReducer
})