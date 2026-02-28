"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/home"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          UniFlow
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-semibold">
          <Link href="/home" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/admin/dashboard" className="hover:text-blue-600 transition">
            Admin
          </Link>
          <Link href="/admin/students" className="hover:text-blue-600 transition">
            Students
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/admin/dashboard"
            className="px-6 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/admin/dashboard"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-8 pb-6 space-y-4 text-gray-700 font-semibold shadow-md">
          <Link href="/home" className="block">
            Home
          </Link>
          <Link href="/admin/dashboard" className="block">
            Admin
          </Link>
          <Link href="/admin/students" className="block">
            Students
          </Link>
        </div>
      )}
    </header>
  );
}