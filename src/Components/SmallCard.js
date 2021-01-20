import React from 'react'
import '../Scss/Contact.scss'
export default function SmallCard(props) {
    return (
        <div className='SmallCard'>
            <div className='logo'>
            {props.logo}
            </div>
            <div className='address'>
                <p className='name'>{props.name}</p>
                <p className='p'>{props.address}</p>
            </div>
        </div>
    )
}
