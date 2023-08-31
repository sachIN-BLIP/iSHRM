
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import Cards from './Cards';
import Newsletter from './Newsletter';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics/>
            <Newsletter />
            <Cards/>
            <Footer />
        </div>
    );
}

export default Home;
