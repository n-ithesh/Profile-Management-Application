// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Profile Management App",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        
        <Header />

      
        <main className="max-w-7xl mx-auto px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
