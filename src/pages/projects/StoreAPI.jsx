import React from 'react';

import Endpoints from './catalogueManager/Endpoints';
import Models from './catalogueManager/Models';

import '@styles/StoreAPI.css';

const StoreAPI = () => {
    const [content, setContent] = React.useState(<Models />);
    const [style, setStyle] = React.useState({});

    const changeContent = newContent => {
        window.scroll(0,0);
        setStyle({
            animation: 'contract 5s 1'
        });

        setTimeout(() => {
            switch(newContent) {
                case 'MODELS':
                    setContent(<Models />);
                    break;
                case 'ENDPOINTS':
                    setContent(<Endpoints />);
                    break;
            }
        }, 1000);
        setTimeout(() => {
            setStyle({});
        }, 5000);

    } 

    return (
        <div className='store-api__container'>
            <div className='store-api__title'>
                <h1 className='title' id="title">Documentation Store API</h1>
            </div>
            <sidebar className='store-api__sidebar'>
                <ul>
                   <li onClick={() => {changeContent('')}}><a>Basics</a></li> 
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