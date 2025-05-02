// components/Header.jsx
"use client";

import { FaStar, FaMoon, FaSun, FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 shadow-lg transition-all duration-300 ${scrolled ? "py-2 shadow-xl" : ""}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300 w-10 h-10 md:w-12 md:h-12"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider whitespace-nowrap">
            AstroLawrence
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Astrologer Icons */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 text-white text-xl md:text-2xl">
          <FaStar className="hover:text-yellow-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
          <FaMoon className="hover:text-blue-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
          <FaSun className="hover:text-orange-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-purple-700 to-pink-500 shadow-lg md:hidden">
            <div className="flex justify-around py-4 px-2">
              <FaStar className="text-2xl text-yellow-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
              <FaMoon className="text-2xl text-blue-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
              <FaSun className="text-2xl text-orange-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}