import Dashboard from "@/components/Dashboard";
import { supabase } from "@/lib/supabaseClient";

export default async function DashboardPage() {
  const { data: students, error } = await supabase
    .from("Uniflowstudents")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className="p-8">
      <Dashboard students={students} />
    </div>
  );
}