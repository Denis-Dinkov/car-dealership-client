'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu, UserCircle2, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pages', href: '/pages' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-[#0a0a1e] lg:bg-transparent text-white p-4 lg:px-11 lg:py-5 absolute">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-3xl font-bold lg:text-dev-dark-100">BOXCARS</p>
        {/* <div className="flex items-center space-x-4">
          <UserCircle2 className="h-6 w-6" />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                onClick={toggleMenu}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#0a0a1e] text-white">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <p
                    key={item.name}
                    className="text-lg hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </p>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                  Add Listing
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div> */}
        <ul className='flex items-center gap-7 text-dev-dark-100'>
          <li>About</li>
          <li>Contact us</li>
          <li>Sign in</li>
          <li>
            <button className="bg-white border-0 rounded-3xl hover:bg-dev-blue-100 hover:text-white ease-out duration-300">
              <p className="py-2 px-6">Submit Listing</p>
            </button>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
