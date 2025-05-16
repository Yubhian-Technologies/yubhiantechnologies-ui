import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const socialIcons = [
    { href: "#", label: "Facebook", iconClass: "fab fa-facebook-f", hoverColor: "hover:bg-blue-600" },
    { href: "#", label: "Twitter", iconClass: "fab fa-twitter", hoverColor: "hover:bg-sky-400" },
    { href: "#", label: "LinkedIn", iconClass: "fab fa-linkedin-in", hoverColor: "hover:bg-blue-700" },
    { href: "#", label: "WhatsApp", iconClass: "fab fa-whatsapp", hoverColor: "hover:bg-green-500" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
       
        <div className="flex justify-center space-x-8 mb-10">
          {socialIcons.map(({ href, label, iconClass, hoverColor }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`text-gray-400 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition transform duration-300 ease-in-out ${hoverColor} hover:text-white hover:scale-110`}
            >
              <i className={`${iconClass} text-2xl`}></i>
            </a>
          ))}
        </div>

       
        <nav>
          <ul className="flex justify-center space-x-12 mb-10 text-lg font-semibold tracking-wide">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       
        <div className="text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} Yubhian Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
