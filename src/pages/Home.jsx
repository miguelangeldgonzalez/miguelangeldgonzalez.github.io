import React from 'react';

import LightTextBox from '../containers/LightTextBox';

import '@styles/Home.css';

const Home = () => {
    const styles = {
        width: 'calc(100% / 4)',
        textAlign: 'center'
    }
    return (
        <div className='home__container'>
            <h1 className='title'>Welco<span className='title__delay1'>m</span>e to my kin<span className='title__delay2'>g</span>dom!</h1>

            <h2>Tell me, what are you searching for?</h2>

            <div className="navigation__container">
                <LightTextBox styles={styles} to='/about'>
                    <p>If you want to know <b>who am I</b> and what can I do,  click here.</p>
                </LightTextBox>
                <LightTextBox styles={styles} to='/projects'>
                    <p>If you want to see <b>my projects</b>, <br /> click here.</p>
                </LightTextBox>
                <LightTextBox styles={styles} to='/contact'>
                    <p>If you want to contact with me, click here (or just go to the footer).</p>
                </LightTextBox>
            </div>
        </div>
    )
}

export default Home;