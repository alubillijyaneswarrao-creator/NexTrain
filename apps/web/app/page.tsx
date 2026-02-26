import Link from "next/link";
import { tracks } from "@/lib/tracks";

export default function HomePage() {
  return (
    <main className="container grid" style={{ gap: "1.25rem" }}>
      <section className="card">
        <span className="badge">Training + Internship Portal</span>
        <h1>Build skills, get evaluated, and secure internships at minimal cost.</h1>
        <p>
          NexTrain combines structured training, mentor-guided internship cycles (G1-G3...), weekly live sessions,
          interview evaluations, and refund-by-performance mechanics.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link className="button" href="/internships/python-developer">Explore Internship Curriculum</Link>
          <Link className="button" href="/pricing" style={{ background: "#334155" }}>Pricing + Refund</Link>
        </div>
      </section>

      <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        <article className="card"><h3>OTP Login</h3><p>Role-based auth for students, mentors, and admins.</p></article>
        <article className="card"><h3>Coupon + Refund Engine</h3><p>Apply coupon, track cycle-wise refund releases.</p></article>
        <article className="card"><h3>Interview Lab</h3><p>Question panel + compiler + live camera + notes.</p></article>
        <article className="card"><h3>Certificates</h3><p>Issue and verify certificates with unique IDs.</p></article>
      </section>

      <section className="card">
        <h2>Internship Tracks</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {tracks.map((track) => (
            <article key={track.slug} className="card" style={{ background: "#0f1530" }}>
              <span className="badge">{track.domain}</span>
              <h3>{track.title}</h3>
              <p>{track.durationWeeks} weeks • {track.cycles.length} growth cycles</p>
              <Link href={`/internships/${track.slug}`} className="button">Explore</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
