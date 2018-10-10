import { getAllCategories } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'



export const GET_CATEGORIES = 'GET_CATEGORIES'


function receiveAllCategories (categories) {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export function handleAllCategories() {
    return (dispatch) => {
        dispatch(showLoading())
        return getAllCategories()
            .then((categories) => {
                dispatch(receiveAllCategories(categories))
                dispatch(hideLoading())
            })
            .catch((a) => console.log(a))
    }
}