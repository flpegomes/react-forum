import { getAllPosts } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'



export const GET_POSTS = 'GET_POSTS'


function receiveAllPosts (posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export function handleAllPosts() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllPosts()
            .then((posts) => {
                dispatch(receiveAllPosts(posts))
                dispatch(hideLoading())
            })
            .catch((a) => console.log(a))
    }
}