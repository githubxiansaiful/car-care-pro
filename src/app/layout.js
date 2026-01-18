import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700",],
});

export const metadata = {
  title: "Car Care Pro | Professional Auto Repair & Maintenance",
  description: "Car Care Pro provides reliable car repair, maintenance, and servicing by trusted professionals. Book quality auto services easily with transparent pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={chakraPetch.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}