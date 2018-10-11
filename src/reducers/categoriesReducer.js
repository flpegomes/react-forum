import { FETCH_CATEGORIES } from '../actions/categoriesActions'

export default function categoriesReducer ( state = [] , action) {
    switch(action.type) {
        case FETCH_CATEGORIES: 
            return action.categories
        default:
            return state
    }
}