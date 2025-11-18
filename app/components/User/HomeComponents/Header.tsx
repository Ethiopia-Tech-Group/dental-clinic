"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show sticky nav if scrolled past 0
      if (currentScroll > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Show top bar only if we are at top
      if (currentScroll === 0) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* ----------- TOP BAR ----------- */}
      {showTopBar && (
        <div className="w-full bg-[#1A3A79] text-white text-sm py-2 px-8 flex justify-between items-center transition-all duration-300">
          <div className="flex space-x-10">
            <span>+251-93-030-8130</span>
            <span>+251-96-701-1760</span>
          </div>

          <div className="flex space-x-4">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-xs">
              f
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-xs">
              X
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-xs">
              ig
            </div>
          </div>
        </div>
      )}

      {/* ----------- BOTTOM NAV BAR ----------- */}
      <div
        className={`w-full bg-white transition-all duration-100 ${
          isSticky ? "fixed top-0 left-0 z-50 " : ""
        }`}
      >
        <div className="flex justify-between items-center px-10 py-2">
          <h2 className="text-2xl font-extrabold text-[#1A3A79]">
            Dr. Munira Speciality Dental Clinic
          </h2>

          <nav className="flex space-x-10 text-[#1A3A79] font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/service-page">Services</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>

          <Link
            href="/booking"
            className="px-8 py-3 bg-[#EDF3FA] text-[#1A3A79] font-semibold rounded-full hover:bg-[#1A3A79] hover:text-white transition duration-300 shadow-sm"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </header>
  );
}
