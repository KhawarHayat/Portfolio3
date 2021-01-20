import React, { useState , useEffect} from 'react'
import '../Scss/Header.scss'
import { FaAngleUp, FaBars, FaTimes } from 'react-icons/fa'
import NavButton from './NavButton'
function Header() {
    const [toggle, setToggle] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return (
        <nav className={scrollPosition > 20 ? 'navbar' : 'navbar1'} >
            <header className='max-width'>
                <p className='logo'>Portfo<span>lio.</span></p>
                <nav className={toggle ? 'nav1' : 'nav'}>
                    <FaTimes className='fatimes' onClick={() => { setToggle(!toggle) }} />
                    <NavButton link='#Home' name='Home' onclick={() => { setToggle(false) }} />
                    <NavButton link='#About' name='About' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Services' name='Services' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Skills' name='Skills' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Portfolio' name='Portfolio' onclick={() => { setToggle(false) }} />
                    <NavButton link='#Contact' name='Contact' onclick={() => { setToggle(false) }}/>
                </nav>
                <FaBars className='fabars' onClick={() => { setToggle(!toggle) }} />
            </header>
           <div onClick={() => {window.scroll({top: 0, left: 0, behavior: 'smooth' })}} className={scrollPosition > 300 ? 'angleUp' : 'angleUpHide'}> <FaAngleUp className='angleUpIcon'/> </div>
        </nav>
    )
}

export default Header
