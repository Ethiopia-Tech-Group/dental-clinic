"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsSticky(currentScroll > 0);
      setShowTopBar(currentScroll === 0);
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* ----------- TOP BAR ----------- */}
      {showTopBar && (
        <div className="w-full bg-[#1A3A79] text-white text-[10px] sm:text-sm py-1 sm:py-2 px-3 sm:px-8 flex justify-between items-center transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-1 sm:space-y-0">
            <span>+251-93-030-8130</span>
            <span>+251-96-701-1760</span>
          </div>

          <div className="flex space-x-2 sm:space-x-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border border-white rounded-full flex items-center justify-center text-[8px] sm:text-xs">
              f
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 border border-white rounded-full flex items-center justify-center text-[8px] sm:text-xs">
              X
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 border border-white rounded-full flex items-center justify-center text-[8px] sm:text-xs">
              ig
            </div>
          </div>
        </div>
      )}

      {/* ----------- BOTTOM NAV BAR ----------- */}
      <div
        className={`w-full bg-white transition-all duration-100 ${
          isSticky ? "fixed top-0 left-0 z-50 " : "relative"
        }`}
      >
        <div className="flex justify-between items-center px-3 sm:px-6 lg:px-10 py-2 sm:py-3">
          {/* Logo */}
          <h2 className="text-sm sm:text-lg lg:text-2xl font-extrabold text-[#1A3A79]">
            Speciality Dental Clinic
          </h2>

          {/* Desktop Navigation (only lg and above) */}
          <nav className="hidden lg:flex space-x-4 lg:space-x-6 text-[#1A3A79] font-medium text-sm sm:text-base items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/service-page">Services</Link>
            <Link href="/contact-us">Contact</Link>
            {/* Book Appointment */}
            <Link
              href="/booking"
              className="px-4 py-1.5 bg-[#EDF3FA] text-[#1A3A79] font-semibold rounded-full hover:bg-[#1A3A79] hover:text-white transition duration-300 shadow-sm text-sm sm:text-base"
            >
              Book Appointment
            </Link>
            {/* Login/Register */}
            <Link
              href="/auth/login"
              className="px-4 py-1.5 bg-white border border-[#1A3A79] text-[#1A3A79] font-semibold rounded-full hover:bg-[#1A3A79] hover:text-white transition duration-300 shadow-sm text-sm sm:text-base"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-1.5 bg-[#1A3A79] text-white font-semibold rounded-full hover:bg-white hover:text-[#1A3A79] border border-[#1A3A79] transition duration-300 shadow-sm text-sm sm:text-base"
            >
              Register
            </Link>
          </nav>

          {/* Mobile & Tablet Hamburger (below lg) */}
          <button
            className="lg:hidden text-2xl text-[#1A3A79]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white w-full px-4 pb-4 flex flex-col space-y-3 text-[#1A3A79] font-medium text-sm sm:text-base">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/service-page" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-6 py-2 bg-[#EDF3FA] text-[#1A3A79] font-semibold rounded-full hover:bg-[#1A3A79] hover:text-white transition duration-300 shadow-sm text-center"
            >
              Book Appointment
            </Link>
            {/* Login/Register */}
            <Link
              href="/auth/login"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-white border border-[#1A3A79] text-[#1A3A79] font-semibold rounded-full hover:bg-[#1A3A79] hover:text-white transition duration-300 text-center"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-[#1A3A79] text-white font-semibold rounded-full hover:bg-white hover:text-[#1A3A79] border border-[#1A3A79] transition duration-300 text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
