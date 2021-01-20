import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { FaGithub, FaLaptop } from 'react-icons/fa'
import '../Scss/Model.scss'
class Model extends Component {
    
    render() {
        const list = this.props.list.map((item) => {
        return <li>{item}</li>
        })
        return createPortal(
            <div className={this.props.classname}>
                <div className='projectDetail'>
                    <div className='info'>
                        <p className='name'>{this.props.name}</p>
                        <p className='discripction'>{this.props.dis}</p>
                        <p className='tech'>Technologies used</p>
                        <ul className='list'>
                            {list}
                        </ul>
                        
                    </div>
                    <div className='projectPic'>
                    <img alt='project' src={this.props.src} />
                    <div className='link'>
                            <a href={this.props.git}><FaGithub className='Icon'/></a>
                            <a href={this.props.website}><FaLaptop className='Icon'/></a>
                        </div>
                </div>
                </div>

                
            </div>,
            document.getElementById('model')
        );
    }
}

export default Model;