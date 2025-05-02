'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-xl shadow-md border-b border-white/40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-serif font-bold text-gray-900 drop-shadow-sm hover:text-purple-700 transition duration-300"
        >
          AstroLawrence
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <Link
              key={index}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-gray-800 font-medium hover:text-purple-600 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-xl py-4 px-5 space-y-4 transition-all duration-300 ease-in-out md:hidden">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <Link
              key={index}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="block text-gray-800 font-medium hover:text-purple-600 transition duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
