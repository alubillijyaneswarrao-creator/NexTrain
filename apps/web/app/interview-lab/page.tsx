import { SectionTitle } from "@/components/section-title";

export default function InterviewLabPage() {
  return (
    <main className="container grid" style={{ gridTemplateColumns: "2fr 1fr", alignItems: "start" }}>
      <section className="card">
        <SectionTitle title="Interview Lab" subtitle="Coding + MCQ + live interaction" />
        <div className="grid" style={{ gridTemplateColumns: "1fr 1.2fr", minHeight: 420 }}>
          <article className="card" style={{ background: "#0f1530" }}>
            <h3>Question Panel</h3>
            <p>Q1: Build a function to group anagrams efficiently.</p>
            <p>Testcases: 7 | Time limit: 1s</p>
            <h4>MCQ Add-on</h4>
            <p>1. Which DB index is best for high-cardinality lookups?</p>
          </article>
          <article className="card" style={{ background: "#0f1530" }}>
            <h3>Compiler / Editor</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{`def group_anagrams(words):\n    # candidate writes code here\n    pass`}</pre>
          </article>
        </div>
      </section>

      <aside className="grid">
        <article className="card">
          <h3>Live Camera</h3>
          <p>Top-right candidate + interviewer feed panel.</p>
        </article>
        <article className="card">
          <h3>Interviewer Notes</h3>
          <p>Rubric: Problem solving, code quality, communication, debugging.</p>
        </article>
      </aside>
    </main>
  );
}
