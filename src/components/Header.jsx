import { useState } from 'react';
import { GOLD_HEX } from '../constants/colors';
import { smoothScrollToId } from '../utils/scroll';

const NAV_ITEMS = [
  { id: 'main', label: 'Home' },
  { id: 'concerts', label: 'Concerts' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (targetId) => {
    smoothScrollToId(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-6 py-2">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo_gmllm.svg"
              alt="Great Music LLM logo"
              className="h-12 w-auto px-4"
            />
          </div>

          <div className="hidden gap-8 md:flex">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavigate(id)}
                className="capitalize font-medium text-gray-800 transition-colors duration-200 hover:text-[#A38138]"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center text-gray-800 md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span
              className={`mb-1.5 block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
                mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`mb-1.5 block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${
                mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white md:hidden">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <img
              src="/logo_gmllm.svg"
              alt="Great Music LLM logo"
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#A38138]"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-6 px-6 py-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavigate(id)}
                className="py-2 text-left text-lg font-medium capitalize text-gray-800 transition-colors duration-200 hover:text-[#A38138]"
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigate('concerts')}
              className="group relative mt-6 w-full overflow-hidden rounded-full px-6 py-3 font-medium text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: GOLD_HEX }}
            >
              <span className="relative z-10">Get Tickets</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
