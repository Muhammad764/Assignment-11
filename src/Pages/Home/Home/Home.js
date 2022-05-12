import React from 'react';
import SectionOne from '../../SectionOne/SectionOne';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Items></Items>
        </div>
    );
};

export default Home;