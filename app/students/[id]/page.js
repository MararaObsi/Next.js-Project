import { notFound } from "next/navigation";
import { students } from "@/lib/data";

export default async function StudentDetails({ params }) {
  const resolvedParams = await params;   
  const id = Number(resolvedParams.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Student Details
      </h1>

      <div className="bg-white p-8 rounded-lg shadow max-w-xl">
        <p className="mb-4">
          <span className="font-semibold">Name:</span> {student.name}
        </p>

        <p className="mb-4">
          <span className="font-semibold">Email:</span> {student.email}
        </p>

        <p className="mb-4">
          <span className="font-semibold">Department:</span> {student.department}
        </p>

        <p className="mb-4">
          <span className="font-semibold">Year:</span> {student.year}
        </p>
      </div>
    </div>
  );
}