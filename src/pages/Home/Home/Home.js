import React from 'react';
import Foother from '../../Shared/Foother/Foother';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import HomeExplores from '../HomeExplores/HomeExplores';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeExplores></HomeExplores>
            <Extra></Extra>
            <Foother></Foother>
        </div>
    );
};

export default Home;