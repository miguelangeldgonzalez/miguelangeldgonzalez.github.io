import React from 'react';

import '../styles/AboutMe.css';

import SimpleTextBox from '../containers/SimpleTextBox';
import Card from '../components/Card';

import DatacampBright from '@icons/logo_datacamp_bright.png';
import PlatziBright from '@icons/logo_platzi_bright.png';

const AboutMe = () => {
    return (
        <div className="about-container">
            <h1 className='title'>Ab<span className='title__delay1'>o</span>ut M<span className='title__delay2'>e</span></h1>
            <SimpleTextBox>
                <h2>Who am I?</h2>
                <p>I’m a creator, I’m appasionate about creating, computational science and IA. For me is not enough with know how to do something, I need to know why we do it that way and not of another way. I like to figure out new forms and ways, I like to innovate.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Studies</h2>
                <p>Principally I study informatic engineering, I’m in the second of four years.</p>
                <h3>Aditional Studies</h3>
                <div className="aditional-studies">
                    <Card img={PlatziBright}>
                        <h3>Platzi</h3>
                        <p>To complement my engneering studies I do a lot of courses at Platzi in frontend, backend and marketing technologies.</p>
                    </Card>

                    <Card img={DatacampBright}>
                        <h3>Datacamp</h3>
                        <p>As hobby I study data science at Datacamp, I’ve learn data analysis,SQL and Python.</p>
                    </Card>
                </div>
            </SimpleTextBox>
        </div>
    )
}

export default AboutMe;