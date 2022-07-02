import React from 'react';

import '../styles/AboutMe.css';

import LightTextBox from '../containers/LightTextBox';
import Card from '../components/Card';

import DatacampBright from '@icons/logo_datacamp_bright.png';
import PlatziBright from '@icons/logo_platzi_bright.png';
import PythonBright from '@icons/logo_python_bright.png';
import NodeBright from '@icons/logo_node_js_bright.png';
import PHPBright from '@icons/logo_php_bright.png';

import Sequelize from '@icons/logo_sequelize_orm.png';
import Postgre from '@icons/logo_postgres_sql.png';
import Bootstrap from '@icons/logo_bootstrap.png';
import WebpackLogo from '@icons/logo_webpack.png';
import Express from '@icons/logo_express_js.png';
import JQuery from '@icons/logo_jquery.png';
import ReactLogo from '@icons/logo_react.png';
import HTMLAndCSS from '@icons/logo_html_css.png';


const AboutMe = () => {
    return (
        <div className="about-container">
            
            <h1 className='title'>Ab<span className='title__delay1'>o</span>ut M<span className='title__delay2'>e</span></h1>
            <LightTextBox>
                <p>I’m a creator, I’m appasionate about creating, computational science and IA. For me is not enough with know how to do something, I need to know why we do it that way and not of another way. I like to figure out new forms and ways, I like to innovate.</p>
            </LightTextBox>

            <div className='conector'>
                <h2 className='title'>Stu<span>d</span>ies</h2>
            </div>
            <LightTextBox>
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
            </LightTextBox>

            <div className='conector'>
                <h2 className='title'>S<span>ki</span>lls</h2>
            </div>
            <div className='skills__container'>
                <LightTextBox> 
                    <h3>Languages</h3>
                    <p>My studies of programming are focused on being a very good backend developer, principally with Node JS.</p>


                    <div className='aditional-studies'>
                        <Card img={NodeBright}>
                            <h4>Node JS</h4>
                            <p>I’m very good with Node JS and JavaScript overall, is the language that I invest more time of understand why it works.</p>
                        </Card>
			            <Card img={PythonBright}>
                            <h4>Python</h4>
                            <p>As I said, I study data science like a hoby so I did several courses of python oriented to data manipulation.</p>
                        </Card>
                        <Card img={PHPBright}>
                            <h4>PHP</h4>
                            <p>It was my first backend programming language and it was with that I created my first project.</p>
                        </Card>
			            <Card img={HTMLAndCSS}>
                            <h4>HTML and CSS</h4>
                            <p>Obviusly for a good web developer I learned HTML and CSS in depth.</p>
                        </Card>
                    </div>

                </LightTextBox>
                <LightTextBox> 
                    <h3>Framworks and Other Technologies</h3>
                    <p>Click a card to send you to a project that was made using the framework or library</p>


                    <div className='aditional-studies'>
                        <Card mini={true} img={Sequelize}>
                            <h4>Sequelize ORM</h4>
                        </Card>
			            <Card mini={true} img={Express}>
                            <h4>Express</h4>
                        </Card>
                        <Card mini={true} img={Postgre}>
                            <h4>PostgreSQL</h4>
                        </Card>
                        <Card mini={true} img={WebpackLogo}>
                            <h4>Webpack</h4>
                        </Card>
			            <Card mini={true} img={ReactLogo}>
			                <h4>React JS</h4>
			            </Card>
                        <Card mini={true} img={Bootstrap}>
                            <h4>Bootstrap</h4>
                        </Card>
			            <Card mini={true} img={JQuery}>
                            <h4>JQuery</h4>
                        </Card>
                    </div>
                    </LightTextBox>
            </div>
            
        </div>
    )
}

export default AboutMe;