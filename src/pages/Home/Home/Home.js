import React from 'react';
import Foother from '../../Shared/Foother/Foother';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import HomeExplores from '../HomeExplores/HomeExplores';
import OverView from '../OverView/OverView';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeExplores></HomeExplores>
            <OverView></OverView>
            <Extra></Extra>
            <UserReview></UserReview>
            <Foother></Foother>
        </div>
    );
};

export default Home;