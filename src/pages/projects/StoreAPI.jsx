import React from 'react';

import Endpoints from './catalogueManager/Endpoints';
import Models from './catalogueManager/Models';

import '@styles/StoreAPI.css';

const StoreAPI = () => {
    return (
        <div className='store-api__container'>
            <div className='store-api__title'>
                <h1>Documentation Store API</h1>
            </div>
            <sidebar className='store-api__sidebar'>
                <ul>
                   <li>Basics</li> 
                   <li>Models</li>
                   <li>Endpoints</li>
                </ul>
            </sidebar>
            <article className='store-api__content'>
                <div className='content__text'>
                    <Endpoints />
                </div>
            </article>
        </div>
    )
}

export default StoreAPI;