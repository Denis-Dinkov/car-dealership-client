import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav
      className={cn(
        'p-4 lg:px-11 lg:py-5 absolute flex justify-between items-center w-full',
        'lg:bg-transparent',
        'text-white',
      )}
    >
      <div className="container flex justify-between items-center">
        <p className="text-3xl font-bold">BOXCARS</p>

        <ul className="flex items-center gap-7">
          <li>About</li>
          <li>Contact us</li>
          <li>Sign in</li>
          <li>
            <button className="text-dev-dark-100 bg-white border-0 rounded-3xl hover:bg-dev-blue-100 hover:text-white ease-out duration-300">
              <p className="py-2 px-6">Submit Listing</p>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
