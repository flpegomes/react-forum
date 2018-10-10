import { GET_POSTS } from '../actions/postsActions'

export default function postsReducer ( state = [] , action) {
    switch(action.type) {
        case GET_POSTS: 
        console.log(action)
        return {
            ...state,
            ...action.posts,
        }
        default:
            return state
    }
}