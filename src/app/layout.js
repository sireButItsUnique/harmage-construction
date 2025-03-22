import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harmage Construction",
  description: "Edmonton based construction company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="relative min-h-screen w-full">
          <div className="absolute top-[20%] left-0 sm:left-10 h-full p-4 z-10">
            <ul className="fixed space-y-2">
              <li className="mb-8">
                <Link href="/" className="links text-lg sm:text-[2rem] font-bold cursor-pointer">
                  Home
                </Link>
              </li>
              <li className="mb-8">
                <Link href="/services" className="links text-lg sm:text-[2rem] font-bold cursor-pointer">
                  Our Services
                </Link>
              </li>
              <li className="mb-8">
                <Link href="/pricing" className="links text-lg sm:text-[2rem] font-bold cursor-pointer">
                  Pricing
                </Link>
              </li>
              <li className="mb-8">
                <Link href="/contact" className="links text-lg sm:text-[2rem] font-bold cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex flex-col gap-8 pt-15 sm:pt-20 items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
