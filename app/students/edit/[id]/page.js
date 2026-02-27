"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditStudentPage() {
  const router = useRouter();
  const params = useParams(); 
  const id = Number(params.id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
  });

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchStudent = async () => {
      const res = await fetch("/api/students");
      const data = await res.json();
      const student = data.find((s) => s.id === id);
      if (!student) return;

      setForm({
        name: student.name,
        email: student.email,
        department: student.department,
        year: student.year,
      });
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/students", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...form }),
    });

    router.push("/students");
    router.refresh();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Student</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow max-w-lg space-y-4"
      >
        <input
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="department"
          placeholder="Department"
          className="w-full p-3 border rounded"
          value={form.department}
          onChange={handleChange}
          required
        />

        <input
          name="year"
          type="number"
          placeholder="Year"
          className="w-full p-3 border rounded"
          value={form.year}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Update Student
        </button>
      </form>
    </div>
  );
}