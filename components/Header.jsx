"use client";

import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/home"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
        >
          UniFlow
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-semibold">
          <Link href="/home" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-indigo-600 transition">
            Features
          </Link>
          <Link href="/admin/dashboard" className="hover:text-indigo-600 transition">
            Dashboard
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* If NOT logged in */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-6 py-2 rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Link>
          </SignedOut>

          {/* If logged in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/home" />
          </SignedIn>

        </div>

        {/* Mobile Menu Button */}
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
            Dashboard
          </Link>

          <SignedOut>
            <Link href="/sign-in" className="block text-indigo-600">
              Sign In
            </Link>
            <Link href="/sign-up" className="block text-indigo-600">
              Sign Up
            </Link>
          </SignedOut>
        </div>
      )}
    </header>
  );
}