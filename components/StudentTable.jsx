"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StudentTable({ students }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    await fetch("/api/students", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    router.refresh(); 
  };

  return (
    <div className="bg-black rounded-lg shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-black">
          <tr>
            <th className="p-4 text-white">Name</th>
            <th className="p-4 text-white">Email</th>
            <th className="p-4 text-white">Department</th>
            <th className="p-4 text-white">Year</th>
            <th className="p-4 text-white">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-4 text-blue-500 font-medium">
                <Link href={`/students/${student.id}`}>
                  {student.name}
                </Link>
              </td>
              <td className="p-4 text-white">{student.email}</td>
              <td className="p-4 text-white">{student.department}</td>
              <td className="p-4 text-white">{student.year}</td>
              <td className="p-4 flex gap-2">
  <Link
    href={`/students/edit/${student.id}`}
    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
  >
    Edit
  </Link>

  <button
    onClick={() => handleDelete(student.id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}