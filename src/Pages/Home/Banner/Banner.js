import React from 'react';
import image from './banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-100 mb-5 mt-5' src={image} alt="" />
        </div>
    );
};

export default Banner;