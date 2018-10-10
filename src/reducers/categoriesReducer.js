import { GET_CATEGORIES } from '../actions/categoriesActions'

export default function categoriesReducer ( state = [] , action) {
    switch(action.type) {
        case GET_CATEGORIES: 
        console.log(action)
        return {
            ...state,
            ...action.categories,
            
            
        }
        default:
            return state
    }
}