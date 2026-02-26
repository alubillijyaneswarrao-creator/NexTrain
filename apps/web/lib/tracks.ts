import type { InternshipTrack } from "@nextrain/shared";

export const tracks: InternshipTrack[] = [
  {
    slug: "python-developer",
    title: "Python Developer Internship",
    domain: "Backend + AI Automation",
    durationWeeks: 12,
    stipendMode: "no_stipend",
    cycles: [
      { id: "g1", title: "Python Fundamentals", outcome: "Build APIs and scripting tools" },
      { id: "g2", title: "Data + SQL", outcome: "Design production-ready relational schemas" },
      { id: "g3", title: "Backend Projects", outcome: "Ship 2 portfolio-grade services" }
    ]
  },
  {
    slug: "fullstack-engineer",
    title: "Fullstack Engineer Internship",
    domain: "React + Node + System Design",
    durationWeeks: 16,
    stipendMode: "stipend",
    cycles: [
      { id: "g1", title: "Frontend Core", outcome: "Create polished and responsive interfaces" },
      { id: "g2", title: "APIs + Databases", outcome: "Build robust backend systems" },
      { id: "g3", title: "Product Sprint", outcome: "Ship real features with mentor reviews" }
    ]
  }
];
