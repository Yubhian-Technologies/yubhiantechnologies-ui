import React from 'react';
import Home from '../sections/Home';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Testimonial from '../sections/Testimonial';

function MainPage() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            {/* <Navbar /> */}
            <Home />
            <About />
            <Testimonial />
            <Services />
            <Contact />
        </div>
    );
}

export default MainPage;
