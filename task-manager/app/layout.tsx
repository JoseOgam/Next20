import "./globals.css";
import type { Metadata } from "next";

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
      <body className="relative">{children}</body>
    </html>
  );
}
