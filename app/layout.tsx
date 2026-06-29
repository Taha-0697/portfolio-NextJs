import "./globals.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'

export const metadata = {
  title: "Premium Portfolio",
  description: "SaaS-style developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
  {/* <Navbar /> */}
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}