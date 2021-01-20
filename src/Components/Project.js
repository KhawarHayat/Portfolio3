import React ,{useState}from 'react'
import {FaSearchPlus} from 'react-icons/fa'
import Model from './Model'

export default function Project(props) {
    const [show, setShow] = useState(false)
    return (
        <div className='Project' onClick={() => setShow(!show)}>
            <img alt={props.alt} src={props.src}/>
            <p>{props.name}</p>
            <FaSearchPlus className='onhover'/>
            <Model classname={show ? 'Model' : "Hide"} name={props.name} dis={props.dis} list={props.list}
            src={props.src}
            git={props.git}
            website={props.website}
            />
        </div>
    )
}
