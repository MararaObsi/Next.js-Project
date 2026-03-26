"use client";
import { useState } from "react";
import Image from "next/image";

export default function Register() {
  const [form, setForm] = useState({
    admissionNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(form); // later connect backend
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">

      
      <div className="mb-8">
        <Image
          src="/sibu.png"
          alt="Sibu Mendi School Logo"
          width={250}
          height={250}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>

      
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-black"
      >

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          First Time Setup
        </h2>

        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Create your account to access the portal
        </p>

        {/* INPUTS */}
        <div className="space-y-4">

            <input
            type="text"
            name="fullName"
            placeholder="Enter your Full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={handleChange}
          />

          <input
            type="text"
            name="admissionNumber"
            placeholder="Admission Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            onChange={handleChange}
          />

        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md">
          Register
        </button>

        {/* EXTRA LINKS */}
        <div className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </div>

      </form>
    </div>
  );
}