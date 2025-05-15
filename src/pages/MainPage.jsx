import React from 'react';
import Home from '../sections/Home';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

function MainPage() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            {/* <Navbar /> */}
            <Home />
            <Services />
            <About />
            <Contact />
        </div>
    );
}

export default MainPage;
