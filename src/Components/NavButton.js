import React from 'react'
import '../Scss/Header.scss'

function NavButton(props) {
    return (
        <p className="nav-button" onClick={props.onclick}>
        <a href={props.link}>{props.name}</a>
        </p>
    )
}

export default NavButton