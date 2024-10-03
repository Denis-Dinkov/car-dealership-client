import React from 'react';

import FooterElements from './FooterElements';

const Footer: React.FC = () => {
  const companyLinks = [
    { text: 'About Us', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'Services', url: '#' },
    { text: 'FAQs', url: '#' },
    { text: 'Terms', url: '#' },
    { text: 'Contact Us', url: '#' },
  ];

  const quickLinks = [
    { text: 'Get In Touch', url: '#' },
    { text: 'Help Center', url: '#' },
    { text: 'Live Chat', url: '#' },
    { text: 'How It Works', url: '#' },
  ];

  const brandsLinks = [
    { text: 'Toyota', url: '#' },
    { text: 'Porsche', url: '#' },
    { text: 'Audi', url: '#' },
    { text: 'BMW', url: '#' },
    { text: 'Ford', url: '#' },
    { text: 'Nissan', url: '#' },
    { text: 'Peugeot', url: '#' },
    { text: 'Volkswagen', url: '#' },
  ];

  const vehiclesLinks = [
    { text: 'Sedan', url: '#' },
    { text: 'Hatchback', url: '#' },
    { text: 'SUV', url: '#' },
    { text: 'Hybrid', url: '#' },
    { text: 'Electric', url: '#' },
    { text: 'Coupe', url: '#' },
    { text: 'Truc', url: '#' },
    { text: 'Convertible', url: '#' },
  ];

  return (
    <footer
      className={'bg-dev-dark-100 text-white w-full text-center font-sans'}
    >
      <div className="input-button-container">
        <input type="text" placeholder="Your email address" />
        <button className="bg-dev-blue-100 text-sm py-3 px-7 rounded-3xl">Sign Up</button>
      </div>

      <div className="container m-auto text-left">
        <div className="grid grid-cols-5 justify-between gap-20 py-14 px-44">
          <FooterElements title="Company" links={companyLinks} />

          <FooterElements title="Quick Links" links={quickLinks} />

          <FooterElements title="Out Brands" links={brandsLinks} />

          <FooterElements title="Vehicles Type" links={vehiclesLinks} />

          <div>
            <h5 className="text-lg font-semibold mb-4">Our Mobile App</h5>
            {/* button Links */}
            <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around border-t border-white border-opacity-10 py-9">
        <p className="text-xs">© 2024 exemple.com. All rights reserved.</p>

        <p className="text-xs">Terms & Conditions - Privacy Notice</p>
      </div>
    </footer>
  );
};

export default Footer;
