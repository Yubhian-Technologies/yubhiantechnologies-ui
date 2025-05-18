import React from 'react';
import Home from '../sections/Home';
import Services from '../sections/Services';
import WorkProcessSection from '../sections/WorkProcessSection';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Testimonial from '../sections/Testimonial';
import Achievements from "../sections/Achievements";

function MainPage() {
    return (
        <div className="max-w-screen overflow-x-hidden">
            {/* <Navbar /> */}
            <Home />
            <About />
            <Testimonial />
            <Services />
            <Achievements />
            <WorkProcessSection/>
            <Contact />
        </div>
    );
}

export default MainPage;
