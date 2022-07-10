import React from 'react';

import Card from '../../components/Card';

import SimpleTextBox from '../../containers/SimpleTextBox';

import Webpack from '../../assets/certifications/diploma-webpack-1.png';
import ReactCertificate from '../../assets/certifications/diploma-react-1.png';
import ReactHandsOn from '../../assets/certifications/diploma-react-practico-1.png';
import MongoDB from '../../assets/certifications/diploma-nodejs-mongo-websockets-1.png';

import '@styles/Portfolio.css';

const Portafolio = () => {
    return (
        <div className='portfolio__container'>
            <h1 className='title'>My Portfolio</h1>

            <SimpleTextBox>
                <p>For te meantime, I don't have big projects with this technology but I have made courses and a lot of exercises. For instance, this page was made with React JS and Webpack.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Certifications</h2>

                <div className='certifications__container'>
                    <Card mini a to='https://platzi.com/p/miguelangeldgonzalez/curso/2444-course/diploma/detalle/' img={ReactCertificate}>
                        <p>Introductory Course to React JS</p>
                    </Card>

                    <Card mini a to='https://platzi.com/p/miguelangeldgonzalez/curso/2484-course/diploma/detalle/' img={ReactHandsOn}>
                        <p>React JS Hands-On Course</p>
                    </Card>
                    <Card mini a to='https://platzi.com/p/miguelangeldgonzalez/curso/2242-course/diploma/detalle/' img={Webpack}>
                        <p>Webpack Course</p>
                    </Card>
                    <Card mini a to='https://platzi.com/p/miguelangeldgonzalez/curso/1689-course/diploma/detalle/' img={MongoDB}>
                        <p>Data Base with Mongo DB and Scket IO</p>
                    </Card>
                </div>

            </SimpleTextBox>
        </div>
    )
}

export default Portafolio;