import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atlas Marketing Consulting",
  description: "Premium creative agency and marketing consulting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScroll>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
