import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "School Portal",
  description: "Student Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16 bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}