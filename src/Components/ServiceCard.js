import React, { Component } from 'react'
import '../Scss/ServiceCard.scss'
class ServiceCard extends Component {
    state = {}
    render() {
        return (
            <div className='ServiceCard'>
                {this.props.children}
                <p className='name'>{this.props.name}</p>
                <p>{this.props.detail}</p>
            </div>
        );
    }
}

export default ServiceCard;