import React from 'react';

import Github from '@icons/github_logo.png';
import Instagram from '@icons/instagram_logo.png';
import Linkedin from '@icons/linkedin_logo.png';

import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/miguelangeldgonzalez" target='_blank' className='footer__icon'>
                <img src={Github} />
            </a>
            <a href="https://www.linkedin.com/in/miguelangel-dom%C3%ADnguez-2183a1203/" target='_blank' className='footer__icon'>
                <img src={Linkedin} />
            </a>
            <a href="https://www.instagram.com/miguelangeldgonzalez/" target='_blank' className='footer__icon'>
                <img src={Instagram} />
            </a>
        </footer>
    )
}

export default Footer;