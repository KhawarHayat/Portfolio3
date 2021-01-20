import React from 'react'

export default function SkillBar(props) {
    return (
        <div className='SkillBar' id={props.id}>
        <div className='Info'>
            <p>{props.name}</p>
            <p>{props.percent}%</p>
        </div>
        <div className='Bar' style={{'--my-width': props.percentage}}><span> </span></div>
        </div>
    )
}
