import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AIAssistant from "@/components/AIAssistant"; // ✅ Import AI Assistant

export const metadata = {
  title: "MeDevice",
  description: "Medical Device Consulting & Staffing Solutions by MeDevice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* ✅ Global Navigation Bar */}
        <Navbar />

        {/* ✅ Main page content */}
        <main className="flex-grow">{children}</main>

        {/* ✅ Global Footer */}
        <Footer />

        {/* ✅ Scroll to Top Button */}
        <ScrollToTop />

        {/* ✅ Floating AI Assistant Orb */}
        <AIAssistant />
      </body>
    </html>
  );
}
