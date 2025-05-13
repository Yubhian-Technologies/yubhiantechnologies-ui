import React from 'react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Yubhian Technologies</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Yubhian Technologies is a dynamic and innovative IT solutions 
              provider based in Bhimavaram, Andhra Pradesh. We specialize in e-business, 
              Business Intelligence, Database Systems, systems integration, and custom 
              application development.
            </p>
            <p className="text-gray-600">
              Our journey began with a vision to bridge the gap between technology and business 
              needs, providing solutions that are both innovative and practical.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are dedicated to delivering top-tier, client-focused solutions that prioritize 
              quality, reliability, timely delivery, and cost-effectiveness. Our mission is to 
              help organizations navigate the ever-evolving business landscape by providing 
              tailored technology solutions that meet both immediate and long-term needs.
            </p>
          </div>
          <div className="order-2 md:order-1 bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Company Details</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Founded</h3>
            <p className="text-gray-600">2024</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
            <p className="text-gray-600">Bhimavaram, Andhra Pradesh</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Company Size</h3>
            <p className="text-gray-600">11-50 employees</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Industry</h3>
            <p className="text-gray-600">IT Services and IT Consulting</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 8500401091</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Website</h3>
            <a href="https://yubhiantechnologies.in" className="text-blue-600 hover:underline">
              yubhiantechnologies.in
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About