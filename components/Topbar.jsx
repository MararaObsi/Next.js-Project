

export default function TopBar() {
  return (
    <div className="bg-blue-900 shadow-lg rounded-b-2xl p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white tracking-wide">
        Admin Panel
      </h2>

      <div className="flex items-center gap-4">
        <div className="text-white-600 text-sm">
          Welcome, <span className="font-semibold text-white">Admin</span> 👋
        </div>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
}