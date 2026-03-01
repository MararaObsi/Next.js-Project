import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}
      <main className="flex-1 w-full">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
// 1Abc@Marara