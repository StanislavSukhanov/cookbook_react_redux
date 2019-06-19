import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'

const DisplayLinks = () => (
    <div>
        <span>Sort By: </span>
        <FilterLink filter={VisibilityFilters.NEW_FIRST}>newer</FilterLink>
        <FilterLink filter={VisibilityFilters.OLD_FIRST}>older</FilterLink>

    </div>
)

export default DisplayLinks;