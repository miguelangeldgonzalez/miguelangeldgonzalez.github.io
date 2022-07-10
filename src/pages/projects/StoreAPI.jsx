import React from 'react';

import Basics from './storeAPI/Basics';
import Endpoints from './storeAPI/Endpoints';
import Models from './storeAPI/Models';

import '@styles/StoreAPI.css';

const StoreAPI = () => {
    const [content, setContent] = React.useState(<Basics />);
    const [style, setStyle] = React.useState({});

    const changeContent = newContent => {
        window.scroll(0,0);
        setStyle({
            animation: 'contract 5s 1'
        });

        switch(newContent) {
            case 'BASICS': 
                setContent(<Basics />);
                break;
            case 'MODELS':
                setContent(<Models />);
                break;
            case 'ENDPOINTS':
                setContent(<Endpoints />);
                break;
        }

        setTimeout(() => {
            setStyle({});
        }, 5000);

    } 

    return (
        <div className='store-api__container'>
            <div className='store-api__title'>
                <h1 className='title' id="title">Documentation <br className='br__store-api' />Store API</h1>
            </div>
            <sidebar className='store-api__sidebar'>
                <ul>
                   <li onClick={() => {changeContent('BASICS')}}><a>Basics</a></li> 
                   <li onClick={() => {changeContent('MODELS')}}><a>Models</a></li>
                   <li onClick={() => {changeContent('ENDPOINTS')}}><a>Endpoints</a></li>
                </ul>
            </sidebar>
            <article className='store-api__content'>
                <div className='content__text' style={style}>
                    {content}
                </div>
            </article>
        </div>
    )
}

export default StoreAPI;