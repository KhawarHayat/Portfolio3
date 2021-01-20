import React from 'react'
import '../Scss/Title.scss'
export default function Title(props) {
    return (
        <div className='Title'>
            <h3 className='title' style={{'--title-color': props.color, '--bg-color': props.bgColor, '--after-color': props.afterColor, '--after-bgcolor': props.afterBgColor}} >{props.title}</h3>
            <p className='content' style={{'--after-color': props.afterColor, '--after-bgcolor': props.afterBgColor}}>{props.mycontent}</p>
        </div>
    )
}
