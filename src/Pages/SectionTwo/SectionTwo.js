import React from 'react';
import img from './section2.jpg'
import './SectionTwo.css'

const SectionTwo = () => {
    return (
        <div>
            <div className='d-flex justify-content-around'>
            <div style={{marginLeft:'70px',marginTop:'100px'}} >
                <h1 style={{marginBottom:'40px'}} >The best bicycling experience</h1>
                <h6 style={{marginBottom:'40px'}} className='text-muted'>Welcome to Veloce! We are one of the biggest bicycle-families in the world. <br /> Our services include all types of repair, search of a perfect bike for every customer, sport events organization and much more.  Join our community and become a part of the bike-family.</h6>
                <button style={{width:'250px',height:'80px'}} className='baton border-0 fw-bold'>More About Our Mission</button>
            </div>
            <div className='container mt-5 me-5 ms-5'>
                <img className='img-fluid' src={img} alt="" />
            </div>
           </div>
        </div>
    );
};

export default SectionTwo;