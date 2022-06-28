import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const header = () => {
    return (
        <header className='header'>
            <span className='header__main-icon'>MD</span>

            <nav className='header__nav'>
                <Link className='header__nav-link' to="/projects">Projects</Link>
                <Link className='header__nav-link' to="/about">About Me</Link>
                <Link className='header__nav-link' to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default header;