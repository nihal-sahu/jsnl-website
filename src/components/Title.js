import React from 'react'
import './Title.css'

function Title({title}) {
    return (
        <div className = 'titleCard'>
                <h1> {title} </h1>
        </div>
    )
}

export default Title
