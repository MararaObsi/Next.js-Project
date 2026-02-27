import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UniTrack - Student Management System",
  description: "University Student Management System built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}