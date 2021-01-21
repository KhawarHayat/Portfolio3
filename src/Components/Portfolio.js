import React, { Component, Suspense, lazy } from 'react'
import Title from './Title'
import '../Scss/Portfolio.scss'
import Loader from 'react-loader-spinner'
import LandingPage from '../images/LandingPage.PNG'
const Project = lazy(() => import('./Project'))
class Portfolio extends Component {
    render() {
        return (
            <section id='Portfolio' className='Portfolio max-width'>
                <Title title='My Portfolio' mycontent='' color='white' bgColor='crimson' afterBgColor='black' afterColor='crimson' />
                <div className='Projects'>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./Portfolio3.PNG' alt='Profile 3' name='Portfolio 3' dis='My online resume which show my skills and experience.' list={['React', 'JavaScript', 'Node', 'Sass', ]} git='https://github.com/KhawarHayat/Portfolio3' website='https://main.d39x6nn3w5wlal.amplifyapp.com/' /></Suspense>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./Chaeban.PNG' alt='Chaeban' name='Chaeban Form' dis='Ice Cream making company need a form to get some info from users' list={['React', 'JavaScript', 'Node', 'React Bootstrap', 'Sass']} git='https://github.com/KhawarHayat/Chaeban' website='https://main.d3si9psuoa6e84.amplifyapp.com/' /></Suspense>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./Emporium.PNG' alt='Emporium' name='Emporium Shop' dis='This is an online store to sell the clothes' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Emporium' website='https://master.d3l6nlnytu6l8u.amplifyapp.com/' /></Suspense>
                      <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./raisely.PNG' alt='Raisely' name='Raisely Form' dis='Make a form that send the data to raisely company.' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/RaiselyForm' website='https://b89w9.csb.app/' /></Suspense>
                      <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./Portfolio.PNG' alt='Portfolio2' name='Portfolio 2' dis='Another online portfolio to show my work' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Portfolio2' website='https://master.d3iivkwy7rqvu6.amplifyapp.com/' /></Suspense>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./EventApp.PNG' alt='EventApp' name='Event App' dis='This app will tell all the event happening near you (in your city)' list={['React', 'Redux', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/EventApp' website='https://github.com/KhawarHayat/EventApp' /></Suspense>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./Portfolio.jpeg' alt='Portfolio1' name='Portfolio 1' dis='My first online porfolio.' list={['HTML5', 'CSS3' ,'React', 'JavaScript', 'Node', 'Material-UI', 'Sass']} git='https://github.com/KhawarHayat/Portfolio' website='https://github.com/KhawarHayat/Portfolio' /></Suspense>
                    <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./MilkMan.jpeg' alt='Doodh wala' name='Doodh Wala' dis='It is a web app which connect the customer and the dairy farmer directly. It is a web app for online dairy product delivery.' list={['HTML5', 'CSS3' ,'React', 'JavaScript', 'Node', 'Express.js','MySQL','REST APIs' ,'Semantic-UI']} git='https://github.com/KhawarHayat/DoodhWala' website='https://github.com/KhawarHayat/DoodhWala' /></Suspense>
                   <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
                    /></div>}><Project src='./FMS.PNG' alt='FMS' name='Frequency Management System' dis='This is a web app to manage the frequency of diffrent radios and diffrent antennas.' list={['HTML5', 'CSS3' ,'React', 'JavaScript', 'Node', 'Express.js','MongoDB','REST APIs' ,'Sass']} git='https://github.com/KhawarHayat/FreqManagement' website='https://github.com/KhawarHayat/FreqManagement' /></Suspense>
                   <Suspense fallback={<div className='ProjectLoader'><Loader
                        type="Oval"
                        color="crimson"
                        height={70}
                        width={70}
            /></div>}><Project src='./ProfileKhawar.jpg' alt='Landing' name='Musical Store' dis='Made on demand for musical app.' list={['HTML5', 'CSS3' ,'React', 'JavaScript']} git='https://github.com/KhawarHayat/LandingPage' website='https://github.com/KhawarHayat/LandingPage' /></Suspense>
                    
                </div>

            </section>
        );
    }
}

export default Portfolio;