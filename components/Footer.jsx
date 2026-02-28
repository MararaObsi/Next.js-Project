import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            EduManage
          </h2>
          <p className="text-sm">
            A modern student management system built with Next.js
            for efficient academic administration.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/home" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/admin/dashboard" className="hover:text-white">
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/students" className="hover:text-white">
                Manage Students
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: mara@edumanage.com</p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Merera Obsi All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}