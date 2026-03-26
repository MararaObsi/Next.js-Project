"use client";
import { useState } from "react";

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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          First Time Setup
        </h2>

        <input
          type="text"
          name="admissionNumber"
          placeholder="Admission Number"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
        />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}