import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* ABOUT */}
        <div>
          <h2 className="text-lg font-semibold mb-3">School Portal</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A modern student management system designed to simplify school
            operations, improve communication, and provide easy access to
            academic information.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/announcements" className="hover:text-white transition">
                Announcements
              </Link>
            </li>

            <li>
              <Link href="/dashboard" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">Email: school@email.com</p>
          <p className="text-gray-400 text-sm">Phone: +251 900 000 000</p>
          <p className="text-gray-400 text-sm">Location: Ethiopia</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center text-gray-500 text-sm py-4">
        © 2026 Sibu Mendi. All rights reserved.
      </div>
    </footer>
  );
}