import React, { Component } from 'react'
import Title from '../Components/Title.js'
import Typewriter from 'typewriter-effect';
import '../Scss/About.scss'
class About extends Component {
    render() {
        return (
            <section id='About' className='container'>
                <Title title='About me' mycontent='' color='black' bgColor='crimson' afterColor='crimson' afterBgColor='' />
                <div className='content'>
                    <img className='image' src='../ProfileKhawar.jpg' alt='Khawar' />
                    <div className='about'>
                        <p className='about-1'>I'm Khawar and I'm a <span><Typewriter
                            options={{
                                strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'Freelancer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span></p>
                        <p className='about-2'>I am expert in front-end. Have a strong technical and logical problem solving expertise & experience in core infrastructure development. I hold a deep understanding of MERN stack, have good fortunate on working medium to large projects.</p>
                        <a href='../Resume.pdf' download>Download CV</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;