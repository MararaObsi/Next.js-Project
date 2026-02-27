export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Departments</h2>
          <p className="text-2xl mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Courses</h2>
          <p className="text-2xl mt-2">5</p>
        </div>
      </div>
    </div>
  );
}