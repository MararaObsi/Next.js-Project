export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-4">
        <p>Welcome Student 👋</p>

        <div className="mt-4 grid gap-4">
          <div className="p-4 bg-white shadow rounded">
            📊 View Grades
          </div>

          <div className="p-4 bg-white shadow rounded">
            📚 Courses
          </div>
        </div>
      </div>
    </div>
  );
}