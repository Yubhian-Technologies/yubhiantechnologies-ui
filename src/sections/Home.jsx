import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          Welcome to Yubhian Technologies
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Innovative IT solutions for your business needs. Established in 2024, we specialize in 
          e-business, Business Intelligence, Database Systems, and custom application development.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Our Services
          </Link>
          <Link 
            to="/contact" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">E-Business Solutions</h3>
            <p className="text-gray-600">
              Comprehensive digital solutions to transform your business operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
            <p className="text-gray-600">
              Data-driven insights to power your business decisions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-gray-600">
              Tailored software solutions for your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Yubhian Technologies</h2>
          <p className="text-gray-600 mb-8">
            We are dedicated to delivering top-tier, client-focused solutions that prioritize 
            quality, reliability, timely delivery, and cost-effectiveness. Our mission is to 
            help organizations navigate the ever-evolving business landscape.
          </p>
          <Link 
            to="/about" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home