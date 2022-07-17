import React from 'react';

import SimpleTextBox from '../../containers/SimpleTextBox';

import CaracasCakeImg from '../../assets/img/caracas_cake.png';

import '../../styles/CaracasCake.css';

const CaracasCake = () => {
    return (
        <div className='caracas-cake__container'>
            <h1 className='title'>Caracas Cake Web Site</h1>
            <ul>
                <li><a href="https://github.com/miguelangeldgonzalez/CaracasCake">Repository</a></li>
            </ul>
            <SimpleTextBox>
                <h2>About the Company</h2>
                <p>Caracas Cake is a bakery from Caracas that sells artistic cakes made specially for each event.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Software Requirements</h2>
                <p>It is a static page that give information about the bakery and how to order a cake. The software that make the orders it is an API that send emails to the cheff of the bakery.</p>

                <p>It doesn't have a table of price or a list of a product because the client doesn't manage standar prices, each cake hace a diferent price depending on the order.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Development Process</h2>
                <p>All the page is made with <b>React JS</b> and compiled with <b>Webpack</b>. The styles follows the <b>BEM Methodology</b> for naming CSS classes. The little API was made using a <b>Node JS</b> module called <b>Nodemailer</b>.</p>

                <p>Currently the web site is not finished I'm waiting for imformation that the client will give me to finish the web site.</p>
            </SimpleTextBox>

            <SimpleTextBox>
                <h2>Demo of the Product</h2>
                <a href='https://www.caracascake.com' className='caracas-cake__demo' target='_blank'><img src={CaracasCakeImg} /></a>
            </SimpleTextBox>
        </div>
    )
}

export default CaracasCake;