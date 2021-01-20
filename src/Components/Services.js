import React, { Component } from 'react'
import Title from './Title'
import '../Scss/Services.scss'
import {FaCode, FaDesktop, FaServer} from 'react-icons/fa'
import ServiceCard from './ServiceCard'
class Services extends Component {
    state = {  }
    render() {
        return (
            <section className='services' id='Services'>
            <Title title='My Services' mycontent='' color='white' bgColor='crimson' afterColor='crimson' afterBgColor='black'/>
            <div className='cards'>
            <ServiceCard key='Frontend Developer' name='Frontend Developer' detail='I am master of React in frontend development. I have 3+ years of experience in it.' ><FaDesktop className='Icon'/></ServiceCard>
            <ServiceCard key='Backend Developer' name='Backend Developer' detail='I am good in backend development using Node.js and Express. I have developed REST APIs.' ><FaServer className='Icon'/></ServiceCard>
            <ServiceCard  key='FullStack Developer' name='FullStack Developer' detail='I am good in MERN Stack Development.' ><FaCode className='Icon'/></ServiceCard>
            </div>
            </section>
        );
    }
}

export default Services;