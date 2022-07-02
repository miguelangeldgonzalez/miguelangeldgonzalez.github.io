import React from 'react';

import '@styles/Carrousel.css';

const Carrousel = ({images}) => {
    let sliderStyles = {
        width: `calc(100% * ${images.length})`
    };
    let imgContainerStyles = {
        width: `calc(100% / ${images.length})`
    };

    let count = 0;
    const right = () => {
        console.log(count);
        if(count < (images.length -1)){
            count++;
            document.querySelector('.carrousel__slider').style.marginLeft = `calc(-100% * ${count})`;
        }
    }
    
    const left = () => {
        console.log(count);
        if(count > 0){
            count--;
            document.querySelector('.carrousel__slider').style.marginLeft = `calc(-100% * ${count})`;
        }
    }
    return (
        <div className='carrousel__container'>
            <div className='carrousel__slider' style={sliderStyles}>
                {images.map(image => {
                    return(
                        <div className='carrousel__img-container' style={imgContainerStyles}>
                            <img src={image.img}/>
                            <p>{image.alt}</p>
                        </div>
                    );
                })}
            </div>
            <div className='carrousel__buttons-container' > 
                <button onClick={left}><span>{'<'}</span></button>
                <button onClick={right}><span>{'>'}</span></button>
            </div>
        </div>
    );
}

export default Carrousel; 