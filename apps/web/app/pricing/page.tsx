import { SectionTitle } from "@/components/section-title";

export default function PricingPage() {
  return (
    <main className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      <section className="card">
        <SectionTitle title="No-Stipend Track" subtitle="Low entry + high accountability" />
        <p>Base price: ₹1000</p>
        <p>Coupon example: NEXTRAIN25 → ₹750 payable</p>
        <p>Refund cap: up to ₹500 based on cycle completions and mentor approvals.</p>
      </section>

      <section className="card">
        <SectionTitle title="Stipend Track" subtitle="For funded/sponsored batches" />
        <p>Learners pass selection process and assessment cutoff.</p>
        <p>Sponsorship-backed payouts post performance milestones.</p>
      </section>

      <section className="card">
        <SectionTitle title="How refund works" />
        <ul>
          <li>G1 completion: partial refund release</li>
          <li>G2 completion: additional refund release</li>
          <li>G3 completion: final refund release</li>
        </ul>
      </section>
    </main>
  );
}
