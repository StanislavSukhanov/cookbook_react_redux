import { connect } from 'react-redux'
import  RecipeList  from '../components/RecipeList'
import { VisibilityFilters } from '../actions'

const getVisibleRecipes = (recipes, filter) => {
    switch (filter) {
        case VisibilityFilters.NEW_FIRST:
            return [...recipes].sort((a, b) => b.date > a.date);
        case VisibilityFilters.OLD_FIRST:
            return [...recipes].reverse();
        default:
            throw new Error('Unknown filter: '+ filter)
    }
}

const mapStateToProps = state => ({
    recipes: getVisibleRecipes(state.recipes, state.visibilityFilter)
})

export default connect(mapStateToProps)(RecipeList);