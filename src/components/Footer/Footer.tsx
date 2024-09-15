import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`bg-dev-dark-100 text-white ${styles.footer}`}>
      <div className="input-button-container">
        <input type="text" placeholder="Your email address" />
        <button className="bg-dev-blue-100 text-sm py-3 px-7 rounded-3xl">Sign Up</button>
      </div>

      <div className="container m-auto text-left">
        <div className="grid grid-cols-5 justify-between gap-20 py-14 px-44">
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs hover:underline">
                  Get In Touch
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Our Brands</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs hover:underline">
                  Toyota
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Porsche
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Audi
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  BMW
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Ford
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Nissan
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Peugeot
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Volkswagen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Vehicle Types</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs hover:underline">
                  Sedan
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Hatchback
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  SUV
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Hybrid
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Electric
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Coupe
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Truck
                </a>
              </li>
              <li>
                <a href="#" className="text-xs hover:underline">
                  Convertible
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Our Mobile App</h5>
            {/* button Links */}
            <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around border-t border-white border-opacity-10 py-9">
        <p>© 2024 exemple.com. All rights reserved.</p>

        <p>Terms & Conditions - Privacy Notice</p>
      </div>
    </footer>
  );
};

export default Footer;
