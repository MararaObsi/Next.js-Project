import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Uniflow",
  description: "University Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}