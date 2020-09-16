import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import Beds from '../components/Beds/Beds';
import Testemonials from '../components/Testemonials/Testemonials';

function Landing() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Beds />
            <Testemonials />
        </>
    );
}

export default Landing;
