import { notFound } from "next/navigation";
import { tracks } from "@/lib/tracks";

export default function InternshipPage({ params }: { params: { slug: string } }) {
  const track = tracks.find((item) => item.slug === params.slug);
  if (!track) return notFound();

  return (
    <main className="container grid">
      <section className="card">
        <span className="badge">{track.domain}</span>
        <h1>{track.title}</h1>
        <p>
          Duration: {track.durationWeeks} weeks • Mode: {track.stipendMode === "stipend" ? "Stipend" : "No-Stipend"}
        </p>
      </section>

      <section className="card">
        <h2>Cycle-Based Curriculum</h2>
        <div className="grid">
          {track.cycles.map((cycle) => (
            <div key={cycle.id} className="card" style={{ background: "#0f1530" }}>
              <p className="badge">{cycle.id.toUpperCase()}</p>
              <h3>{cycle.title}</h3>
              <p>{cycle.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>What this page represents</h2>
        <ul>
          <li>Training modules, internship tasks, and Sunday live sessions.</li>
          <li>Eligibility, project counts, mentor review checkpoints, and interview process.</li>
          <li>Coupon-enabled enrollment and cycle-wise refund eligibility.</li>
        </ul>
      </section>
    </main>
  );
}
