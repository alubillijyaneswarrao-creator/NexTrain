export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <h2 style={{ marginBottom: "0.3rem" }}>{title}</h2>
      {subtitle ? <p style={{ margin: 0, opacity: 0.9 }}>{subtitle}</p> : null}
    </div>
  );
}
