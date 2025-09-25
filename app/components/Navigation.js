'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <Image 
              src="/excella-icon.png" 
              alt="Excella RV Repair" 
              width={40} 
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-1.5 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-all"
            aria-label="Toggle menu"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <span className={`block w-6 h-1 bg-orange-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-1 bg-orange-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1 bg-orange-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          

        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}