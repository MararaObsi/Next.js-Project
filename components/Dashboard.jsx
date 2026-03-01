"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch students from Supabase
  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase
        .from("Uniflowstudents")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching students:", error.message);
      } else {
        setStudents(data || []);
        setFiltered(data || []);
      }

      setLoading(false);
    };

    fetchStudents();
  }, []);

  // 🔎 Search Filtering
  useEffect(() => {
    const f = students.filter(
      (s) =>
        s.name?.toLowerCase().includes(search.toLowerCase()) ||
        s.department?.toLowerCase().includes(search.toLowerCase()) ||
        s.year?.toString() === search
    );
    setFiltered(f);
  }, [search, students]);

  // 📊 Statistics
  const totalStudents = filtered.length;
  const departments = [...new Set(filtered.map((s) => s.department))];
  const totalDepartments = departments.length;

  const years = [1, 2, 3, 4, 5];
  const yearCounts = years.map((y) => ({
    year: `Year ${y}`,
    count: filtered.filter((s) => s.year === y).length,
  }));

  if (loading) {
    return <p className="text-lg">Loading dashboard...</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* 🔎 Search */}
      <input
        type="text"
        placeholder="Search by name, department, or year"
        className="border p-3 rounded w-full max-w-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Students</h2>
          <p className="text-3xl font-bold">{totalStudents}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <p className="text-3xl font-bold">{totalDepartments}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Year-wise Count</h2>
          {yearCounts.map((yc) => (
            <p key={yc.year}>
              {yc.year}: {yc.count}
            </p>
          ))}
        </div>
      </div>

      {/* 📊 Chart */}
      <div className="p-6 rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Students Per Year</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={yearCounts}>
            <XAxis dataKey="year" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-left border">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Department</th>
              <th className="p-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.email}</td>
                <td className="p-4">{student.department}</td>
                <td className="p-4">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}