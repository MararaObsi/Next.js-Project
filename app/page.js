import Link from "next/link";
import { students } from "@/lib/data";

export default function HomePage() {
  const totalStudents = students.length;
  const departments = [...new Set(students.map(s => s.department))].length;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to Student Management System
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          A powerful platform for managing students, departments, and academic data.
          Designed for both Admins and Students.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Admin Panel
          </h2>
          <p className="text-gray-600 mb-6">
            Manage students, departments, statistics and system data.
          </p>
          <Link
            href="/admin/dashboard"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
          >
            Go to Admin Dashboard
          </Link>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Student Portal
          </h2>
          <p className="text-gray-600 mb-6">
            View your profile, academic information and updates.
          </p>
          <Link
            href="/admin/students"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Enter Student Portal
          </Link>
        </div>

      </div>

      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl border">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          System Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-blue-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-blue-900">Total Students</h4>
            <p className="text-3xl font-bold text-blue-900 mt-2">
              {totalStudents}
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-green-700">Departments</h4>
            <p className="text-3xl font-bold text-green-700 mt-2">
              {departments}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}