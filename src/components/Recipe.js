import React from 'react'
import PropTypes from 'prop-types'

const Recipe =({onClick, name, date, text}) => (
    <li>
    {/* onClick={onClick}> */}
        <span>{date}</span>
        <span>{name}</span>
        <p>{text}</p>
    </li>
)

Recipe.propTypes = {
    onClick: PropTypes.func.isRequired, 
    name: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired   
}

export default Recipe;