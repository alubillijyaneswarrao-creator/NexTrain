import type { ReactNode } from "react";

export function DashboardCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </section>
  );
}
