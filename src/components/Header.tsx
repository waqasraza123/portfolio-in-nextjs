"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Waqas</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
            About
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
            Projects
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isNavOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isNavOpen && (
        <nav className="md:hidden bg-white bg-opacity-95 shadow-md py-4">
          <ul className="space-y-4 text-center">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition ease-in-out duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
