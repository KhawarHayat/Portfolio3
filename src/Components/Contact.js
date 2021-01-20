import React, { Component, Suspense, lazy } from 'react'
import Title from './Title.js'
import '../Scss/Contact.scss';
import Loader from 'react-loader-spinner';
import { FaEnvelope, FaMapMarker, FaUser } from 'react-icons/fa';

const Message = lazy(() => import('./Message.js'))
const SmallCard = lazy(() => import('./SmallCard.js'))

class Contact extends Component {
    state = {}
    render() {
        return (
            <div className='Contact' id='Contact'>
                <Title title='Contact Me' mycontent='' color='black' bgColor='black' afterBgColor='white' afterColor='crimson' />
                <div className='Main'>
                    <div className='left'>
                        <p className='heading'>Get in Touch</p>
                        <p className='detail'>You can get in touch with me by any means mentioned below. I am available from 8:00 am to 8:00 pm (GMT+5) Monday to Friday. Moreover, I am open to work for 40 hour per week or for fulltime jobs. </p>
                        <Suspense fallback={<div className='SmallCardLoader'><Loader
                            type="Oval"
                            color="crimson"
                            height={70}
                            width={70}
                        /></div>}>
                            <SmallCard logo={<FaUser className='Icon' />} name='Name' address='Khawar Hayat' />
                            <SmallCard logo={<FaMapMarker className='Icon' />} name='Address' address='Islamabad, Punjab, Pakistan' />
                            <SmallCard logo={<FaEnvelope className='Icon' />} name='Email' address='khawarhayat1997@gmail.com' />
                        </Suspense>
                    </div>
                    <div className='right'>
                        <p className='heading'>Message me</p>
                        <Suspense fallback={<div className='Loader'><Loader
                            type="Oval"
                            color="crimson"
                            height={100}
                            width={100}
                        /></div>}>
                            <Message />
                        </Suspense>

                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;