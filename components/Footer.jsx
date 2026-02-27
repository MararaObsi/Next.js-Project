import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center space-y-4">
        
        <h2 className="text-xl font-bold tracking-wide">Student Management System</h2>

        
        <p className="text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} Merera Obsi All rights reserved.
        </p>

        
        <div className="flex items-center gap-6 text-white">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}