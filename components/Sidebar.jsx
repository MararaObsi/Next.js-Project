"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">UniTrack</h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-gray-300">
          Dashboard
        </Link>

        <Link href="/students" className="block hover:text-gray-300">
          Students
        </Link>

        <Link href="/students/add" className="block hover:text-gray-300">
          Add Student
        </Link>
      </nav>
    </aside>
  );
}