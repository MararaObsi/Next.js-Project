import StudentTable from "@/components/StudentTable";

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
      <h1 className="text-3xl font-bold mb-6">Students List</h1>

      <StudentTable students={students} />
    </div>
  );
}