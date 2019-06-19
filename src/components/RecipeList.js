import React from 'react'
import Recipe from './Recipe.js'
import PropTypes from 'prop-types'



const RecipeList = ({ recipes }) => (
    <ul>
        {recipes.map(recipe => (
                <Recipe key={recipe.id}{...recipe} />
            ))}
    </ul>
)

export default RecipeList;


