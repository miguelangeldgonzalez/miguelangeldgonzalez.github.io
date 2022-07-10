import React from 'react';

import Card from '../components/Card';

import EmailBright from '@icons/logo_email_bright.png';
import InstagramBright from '@icons/logo_instagram_bright.png';
import LinkedinBright from '@icons/logo_linkedin_bright.png';

import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className='contact__container'>
            <h1 className='title'>Contact</h1>

            <div className="contact__icons">
                <Card mini img={InstagramBright} to='https://www.instagram.com/miguelangeldgonzalez/' a target='blank'>
                    <p>Instagram</p>
                </Card>
                <Card mini img={EmailBright} to='mailto:miguelangel.dgonzalez@gmail.com' a target='blank'>
                    <p>miguelangel.dgonzalez@gmail.com</p>
                </Card>
                <Card mini img={LinkedinBright} to='https://www.linkedin.com/in/miguelangel-dom%C3%ADnguez-2183a1203/' a target='blank'>
                    <p>LinkedIn</p>
                </Card>
            </div>
        </div>
    )
}

export default Contact;