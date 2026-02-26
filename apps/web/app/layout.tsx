import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontWeight: 700 }}>NexTrain</Link>
          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing & Refund</Link>
            <Link href="/internships/python-developer">Internship Tracks</Link>
            <Link href="/interview-lab">Interview Lab</Link>
            <Link href="/dashboard/student">Dashboards</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
