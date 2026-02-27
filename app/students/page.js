import Link from "next/link";

async function getStudents() {
  const res = await fetch("http://localhost:3000/api/students", {
    cache: "no-store",
  });

  return res.json();
}

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Students List
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Department</th>
              <th className="p-4">Year</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-100">
                <td className="p-4 text-blue-600 font-medium">
                  <Link href={`/students/${student.id}`}>
                    {student.name}
                  </Link>
                </td>
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