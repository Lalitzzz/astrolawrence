// components/Header.jsx
"use client";

import { FaStar, FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-12 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
        />
        <h1 className="text-2xl font-bold text-white tracking-wider">AstroLawrence </h1>
      </div>

      {/* Astrologer Icons */}
      <div className="flex items-center space-x-6 text-white text-2xl">
        <FaStar className="hover:text-yellow-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <FaMoon className="hover:text-blue-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
        <FaSun className="hover:text-orange-300 hover:scale-125 transition-transform duration-300 cursor-pointer" />
      </div>
    </header>
  );
}
