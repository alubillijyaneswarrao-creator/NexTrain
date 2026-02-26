import { notFound } from "next/navigation";
import { DashboardCard } from "@/components/dashboard-card";

const roles = ["student", "mentor", "admin"] as const;

export default function RoleDashboard({ params }: { params: { role: string } }) {
  if (!roles.includes(params.role as (typeof roles)[number])) return notFound();

  return (
    <main className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      <DashboardCard title={`${params.role.toUpperCase()} Dashboard`}>
        <p>Role-specific metrics, approvals, and action center.</p>
      </DashboardCard>

      <DashboardCard title="Growth Cycle Progress">
        <p>Track G1/G2/G3 stars unlocked after mentor review and AI scoring.</p>
      </DashboardCard>

      <DashboardCard title="Actions">
        <ul>
          <li>Student: submit tasks, join interviews, access curriculum.</li>
          <li>Mentor: evaluate submissions, approve refunds, run Sunday sessions.</li>
          <li>Admin: full CRUD on all users, courses, internships, and coupons.</li>
        </ul>
      </DashboardCard>
    </main>
  );
}
