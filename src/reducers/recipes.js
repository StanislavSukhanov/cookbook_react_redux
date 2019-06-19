
// define a reducer for handling an action of adding a recipe.
const recipes = (state = [], action) => {
    switch (action.type){
        case 'ADD_RECIPE':
            console.log('well, it worked', state);
            return [
                ...state, 
                {
                    id: action.id, 
                    date: action.date, 
                    //name: action.name,
                    text: action.text,  
                    
                }
                
            ]
        default:
            return state;
        
    }
}

export {recipes}