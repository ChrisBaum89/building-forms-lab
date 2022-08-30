import React from "react"

const Band = props => {
    return (
        <li id={props.index}>{props.band.name}</li>
    )
}

export default Band