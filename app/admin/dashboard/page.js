import { students } from "@/lib/data";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <div>
      <Dashboard students={students} />
    </div>
  );
}