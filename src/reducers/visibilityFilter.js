import { VisibilityFilters } from '../actions'

// HANDLES FILTERING
const visibilityFilter = (state = VisibilityFilters.NEW_FIRST, action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER': 
            console.log(state);
            return action.filter;
        default:
            return state;   
    }
}

export {visibilityFilter}