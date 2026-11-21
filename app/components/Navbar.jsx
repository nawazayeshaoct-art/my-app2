"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full overflow-x-hidden bg-white">
      {/* Top Promo Banner */}
      {showBanner && (
        <div className="bg-black text-white w-full min-h-10 px-4 py-2 flex justify-between sm:justify-around items-center text-xs sm:text-sm">
          <span className="text-center flex-1">
            Sign up and get 20% off to your first order.{" "}
            <Link href="/Casual" className="underline font-medium ml-1 sm:ml-2.5">
              Sign Up Now
            </Link>
          </span>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="material-symbols-outlined text-base sm:text-lg cursor-pointer ml-2 shrink-0"
            aria-label="Close banner"
          >
            close
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Mobile Menu Button + Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="material-symbols-outlined lg:hidden text-2xl cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? "close" : "menu"}
          </button>

          <Link href="/" className="font-extrabold text-2xl sm:text-3xl text-black">
            SHOP.CO
          </Link>
        </div>

        {/* Center Nav Links (Laptop par dikhenge) */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-black shrink-0">
          <li>
            <Link href="/Detail" className="hover:text-gray-600">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Casual" className="hover:text-gray-600">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/Casual" className="hover:text-gray-600">
              New Arrival
            </Link>
          </li>
          <li>
            <Link href="/Casual" className="hover:text-gray-600">
              Brand
            </Link>
          </li>
        </ul>

        {/* Search Bar (Tablet & Laptop par inline dikhega) */}
        <div className="hidden md:flex bg-[#F2F0F1] px-4 h-10 rounded-full flex-1 max-w-md items-center gap-3 text-gray-500">
          <span className="material-symbols-outlined text-xl">search</span>
          <input
            type="text"
            placeholder="Search For Products..."
            className="bg-transparent w-full text-sm text-black placeholder-gray-500 outline-none"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0 text-black">
          <Link href="/cart" className="material-symbols-outlined text-2xl">
            shopping_cart
          </Link>
          <span className="material-symbols-outlined text-2xl cursor-pointer">
            person
          </span>
        </div>
      </div>

      {/* Mobile Search Bar (Sirf chhoti phone screen par) */}
      <div className="md:hidden px-4 pb-3">
        <div className="bg-[#F2F0F1] px-4 h-10 rounded-full w-full flex items-center gap-3 text-gray-500">
          <span className="material-symbols-outlined text-xl">search</span>
          <input
            type="text"
            placeholder="Search For Products..."
            className="bg-transparent w-full text-sm text-black placeholder-gray-500 outline-none"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu (Jab menu icon click ho) */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-black">
            <li>
              <Link href="/Detail" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Casual" onClick={() => setMenuOpen(false)}>
                On Sale
              </Link>
            </li>
            <li>
              <Link href="/Casual" onClick={() => setMenuOpen(false)}>
                New Arrival
              </Link>
            </li>
            <li>
              <Link href="/Casual" onClick={() => setMenuOpen(false)}>
                Brand
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;