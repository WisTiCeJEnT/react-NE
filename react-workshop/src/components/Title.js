import React from 'react'

const Title  = (props) =>
{
    return(
        <div>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Title