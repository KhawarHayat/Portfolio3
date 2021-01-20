import React, { Suspense, lazy } from 'react';
import './App.scss';
import Loader from 'react-loader-spinner'
const About = lazy(() => import('./Components/About.js'))
const Contact = lazy(() => import('./Components/Contact.js'))
const Footer = lazy(() => import('./Components/Footer.js'))
const Header = lazy(() => import('./Components/Header.js'))
const Home = lazy(() => import('./Components/Home.js'))
const Portfolio = lazy(() => import('./Components/Portfolio.js'))
const Services = lazy(() => import('./Components/Services.js'))
const Skills = lazy(() => import('./Components/Skills.js'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className='Loader'><Loader
        type="Oval"
        color="crimson"
        height={100}
        width={100}
      /></div>}>
        <Header />
        <Home />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
