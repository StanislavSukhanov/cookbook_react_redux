// dev mode
let nextRecipeId = 0; 
// dev mode


// TO HANLE ADDING AN ITEM
export const addRecipe = text =>({
    type: 'ADD_RECIPE',
    id: nextRecipeId++, 
    date: new Date().getTime(),
    //name: name
    text
})

// TO HANLE AN ORDER ITEMS ARE DISPLAYED
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER', 
    filter
})

export const VisibilityFilters = {
    NEW_FIRST: 'NEW_FIRST',
    OLD_FIRST: 'OLD_FIRST'
}