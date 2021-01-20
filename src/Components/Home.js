import React, { Component } from 'react'
import '../Scss/Home.scss'
import Typewriter from 'typewriter-effect';


class Home extends Component {
    render() {
        return (
            <section id='Home' className='home' style={{ backgroundImage: `url('../profile2.jpg')` }}>
                <div className='max-width'>
                    <p className='text-1'>Hello, my name is</p>
                    <p className='text-2'>Khawar Hayat</p>
                    <p className='text-3'>And I am a <span><Typewriter
                        options={{
                            strings: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'Freelancer'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span> </p>
                    <button onClick={() => {document.getElementById('Contact').scrollIntoView();}} >Hire me</button>
                </div>

            </section>
        );
    }
}

export default Home;