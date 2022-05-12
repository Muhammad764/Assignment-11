import React from 'react';
import SectionOne from '../../SectionOne/SectionOne';
import SectionTwo from '../../SectionTwo/SectionTwo';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Items></Items>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;