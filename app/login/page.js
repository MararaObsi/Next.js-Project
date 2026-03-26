"use client";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form); // later connect to backend
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">

      {/* LOGO (OUTSIDE + LARGE) */}
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

      {/* FORM */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Login to your account
        </p>

        {/* INPUTS */}
        <div className="space-y-4 text-black">

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={handleChange}
          />

        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
          Login
        </button>

        {/* EXTRA LINKS */}
        <div className="text-center mt-4 text-sm text-gray-500">
          First time?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Setup your account
          </a>
        </div>

      </form>
    </div>
  );
}