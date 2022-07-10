import React from 'react';
import { Link } from 'react-router-dom';

import SimpleTextBox from '../containers/SimpleTextBox';

import Logo from '../assets/img/logo_no_background.png';

import '@styles/Home.css';

const Home = () => {
    return (
        <div className='home__container'>
            <div className="banner">
                <div className="banner__text-container">
                    <h1 className='title'>Miguel<span className='title__delay1'>an</span>gel Domi<span className='title__delay2'>n</span>guez</h1>

                    <h2>Web Developer</h2>

                    <SimpleTextBox>
                        <p>I'm a JavaScript developer, my principal skills are Node JS and react JS. My goal is being a full-stack JavaScript developer.</p>
                    </SimpleTextBox>
                </div>
                <div className="banner__image-container">
                    <i></i>
                    <i className="second"></i>
                    <i className="third"></i>
                    <i className="fourth"></i>
                    <img src={Logo} alt="Logo Miguelángel Dominguez" />
                </div>
            </div>

            <div className="navigation">
                <h2>Tell me, what are you searching for?</h2>

                <div className="navigation__sections">
                    
                    <div className='navigation__section'>
                        <Link className='navigation__link' to='/projects'>
                            <div className="connection"></div>
                            <SimpleTextBox>
                                <h3>Projects</h3>

                                <p>A list of all the projects that I did.</p>
                            </SimpleTextBox>
                        </Link>
                        <div className="cover"></div>
                    </div>

                    <div className='navigation__section'>
                        <Link className='navigation__link' to='/about'>
                            <div className="connection"></div>
                            <SimpleTextBox>
                                <h3>About Me</h3>

                                <p>A summary about me, my skills, certification, goals, etc.</p>
                            </SimpleTextBox>
                        </Link>
                        <div className="cover"></div>
                    </div>
                    <div className='navigation__section'>
                        <Link className='navigation__link' to='/contact'>
                            <div className="connection"></div>
                            <SimpleTextBox>
                                <h3>Contact</h3>
                                <p>All the ways with you can contact me.</p>
                            </SimpleTextBox>
                        </Link>
                        <div className="cover"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;