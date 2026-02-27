"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    router.push("/students");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Add New Student
      </h1>

      
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto space-y-5 border"
      >
        <input
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
          required
        />

        <input
          name="department"
          placeholder="Department"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
          required
        />

        <input
          name="year"
          type="number"
          placeholder="Year"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}