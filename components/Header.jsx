"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        {/* LEFT: Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">
          School Portal
        </h1>

        {/* RIGHT: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>

          <Link href="/announcements" className="hover:text-blue-500 transition">
            Announcements
          </Link>

          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 border-t px-4 py-4 space-y-4 text-gray-700 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>

          <Link
            href="/announcements"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Announcements
          </Link>
          
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-blue-600 font-semibold"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}