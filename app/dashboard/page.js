import { students } from "@/lib/data";
import DashboardStats from "@/components/DashboardStats";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardStats students={students} />
    </div>
  );
}