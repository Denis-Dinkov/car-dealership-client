import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/utils/helpers';

import Navbar from '../Navbar';
import { ChevronDown } from 'lucide-react';

export const HomeSearch = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://demoapus1.com/boxcar/wp-content/uploads/2023/10/slider1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
      }}
      className="h-screen bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full gap-16">
        <div>
          <p className="text-white text-center">Find cars for sale and for rent near you</p>
          <br />
          <h3 className="text-white font-bold text-7xl">Find Your Perfect Car</h3>
        </div>
        <div className={cn('py-4 rounded-[80px] pl-8 pr-4', 'flex justify-center', 'bg-slate-50')}>
          <Popover>
            <PopoverTrigger className="px-4 w-48 flex justify-between items-center">
              Any Makes
              <ChevronDown />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Separator orientation="vertical" />
          <Popover>
            <PopoverTrigger className="px-4 w-48 flex justify-between items-center">
              Any Makes
              <ChevronDown />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Separator orientation="vertical" />
          <Popover>
            <PopoverTrigger className="px-4 w-48 flex justify-between items-center">
              Any Makes
              <ChevronDown />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <button className="border-0 rounded-3xl bg-dev-blue-100 text-white ease-out duration-300 py-3 px-5">
            Submit Listing
          </button>
        </div>
      </div>
    </div>
  );
};
