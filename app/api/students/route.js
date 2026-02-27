import { students, getNextId } from "@/lib/data";

export async function GET() {
  return Response.json(students);
}

export async function POST(request) {
  const body = await request.json();

  const newStudent = {
    id: getNextId(),
    name: body.name,
    email: body.email,
    department: body.department,
    year: Number(body.year),
  };

  students.push(newStudent);

  return Response.json(newStudent, { status: 201 });
}
export async function DELETE(request) {
  const { id } = await request.json();

  const index = students.findIndex((s) => s.id === Number(id));

  if (index === -1) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  students.splice(index, 1);

  return Response.json({ message: "Student deleted successfully" });
}
export async function PUT(request) {
  const body = await request.json();
  const id = Number(body.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return Response.json({ message: "Student not found" }, { status: 404 });
  }

  student.name = body.name || student.name;
  student.email = body.email || student.email;
  student.department = body.department || student.department;
  student.year = body.year ? Number(body.year) : student.year;

  return Response.json(student);
}