'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-xl shadow-lg border-b border-white/40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-serif font-bold text-gray-800 drop-shadow-sm hover:text-blue-600 transition duration-300"
        >
          AstroLawrence
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link href="/services" className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <Link href="/contact" className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md px-6 py-4 space-y-3">
          <Link href="/" className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link href="/services" className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
