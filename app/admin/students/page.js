import StudentTable from "@/components/StudentTable";
import { supabase } from "@/lib/supabaseClient";

export default async function StudentsPage() {
  const { data: students, error } = await supabase
    .from("Uniflowstudents")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Students List</h1>
      <StudentTable students={students} />
    </div>
  );
}