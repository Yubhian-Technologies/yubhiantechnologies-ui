import React from 'react';
import Home from '../sections/Home';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

function MainPage() {
    return (
        <>
            
            {/* <Navbar /> */}
            <Home />
            <Services />
            <About />
            <Contact />
        </>
    );
}

export default MainPage;
