"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [stats, setStats] = useState({
    students: 0,
    departments: 4,
    courses: 8,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStats((prev) => ({
        ...prev,
        students: data.length,
      }));
    } catch (err) {
      console.log("Error fetching stats");
    }
  };

  return (
    <div className="w-full">

      <Header />

      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-800 via-blue-700 to-purple-800 text-white px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          The Future of <br /> University Management
        </h1>

        <p className="mt-8 max-w-3xl text-xl opacity-90">
          UniFlow connects Administrators, Students, and Departments
          into one powerful digital ecosystem for smarter academic management.
        </p>

        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          <Link
            href="/sign-up"
            className="bg-white text-indigo-700 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Start Free Today
          </Link>

          <Link
            href="/sign-in"
            className="border-2 border-white px-10 py-4 rounded-2xl hover:bg-white hover:text-indigo-700 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <h2 className="text-5xl font-bold">{stats.students}+</h2>
            <p className="mt-2 opacity-80">Active Students</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">{stats.departments}</h2>
            <p className="mt-2 opacity-80">Departments</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">{stats.courses}</h2>
            <p className="mt-2 opacity-80">Courses</p>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="py-32 bg-gray-100 w-full px-12">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800">
            Built For Every Role
          </h2>
          <p className="mt-6 text-gray-500 text-lg">
            A centralized system that empowers administrators and students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-6 text-blue-700">
              Administrator Control Center
            </h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>✔ Manage student records</li>
              <li>✔ Organize departments</li>
              <li>✔ Control academic data</li>
              <li>✔ Monitor system statistics</li>
              <li>✔ Secure dashboard access</li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-3xl font-bold mb-6 text-indigo-700">
              Student Academic Portal
            </h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>✔ View personal profile</li>
              <li>✔ Track academic progress</li>
              <li>✔ Access course information</li>
              <li>✔ Department updates</li>
              <li>✔ Secure login access</li>
            </ul>
          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">

        <h2 className="text-5xl font-bold">
          Transform Your Institution Digitally
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Join the next generation of academic management systems.
        </p>

        <Link
          href="/sign-up"
          className="inline-block mt-12 bg-white text-indigo-700 px-12 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          Create Your Account
        </Link>

      </section>

      <Footer />

    </div>
  );
}