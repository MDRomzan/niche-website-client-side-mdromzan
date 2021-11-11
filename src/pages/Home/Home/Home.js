import React from 'react';
import Foother from '../../Shared/Foother/Foother';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeExplores from '../HomeExplores/HomeExplores';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeExplores></HomeExplores>
            <Foother></Foother>
        </div>
    );
};

export default Home;