import { students } from "@/lib/data";

export async function GET() {
  return Response.json(students);
}