
export default function DashboardStats({ students }) {
  const totalStudents = students.length;

  
  const departments = [...new Set(students.map(s => s.department))];
  const totalDepartments = departments.length;

  
  const years = [1, 2, 3, 4,5]; 
  const yearCounts = years.map(y => ({
    year: y,
    count: students.filter(s => s.year === y).length,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Total Students</h2>
        <p className="text-3xl font-bold">{totalStudents}</p>
      </div>

      
      <div className="bg-green-500 text-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Departments</h2>
        <p className="text-3xl font-bold">{totalDepartments}</p>
      </div>

      
      <div className="bg-purple-500 text-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Students by Year</h2>
        {yearCounts.map(yc => (
          <p key={yc.year}>
            Year {yc.year}: {yc.count}
          </p>
        ))}
      </div>
    </div>
  );
}