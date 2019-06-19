import React from 'react'
import DisplayLinks from './DisplayLinks'
import AddRecipe from '../containers/AddRecipe'
import VisibleRecipeList from '../containers/VisibleRecipeList'



const App = () => (
    <div>
        <AddRecipe />
        <DisplayLinks />
        <VisibleRecipeList />
    </div>
)


export default App;