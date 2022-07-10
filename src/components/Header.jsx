import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo_no_background.png';

import '../styles/Header.css';

const header = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__main-logo'>
                <img src={Logo} />
            </Link>

            <nav className='header__nav'>
                <Link className='header__nav-link' to="/projects">Projects</Link>
                <Link className='header__nav-link' to="/about">About Me</Link>
                <Link className='header__nav-link' to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default header;