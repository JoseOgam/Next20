import { Footer, NavBar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/services/provider";

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "Nextjs Task Manager App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relativ bg-orange-100">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
