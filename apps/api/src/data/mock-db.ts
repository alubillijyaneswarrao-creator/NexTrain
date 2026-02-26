import type { CertificateRecord, EnrollmentPlan, InternshipTrack } from "@nextrain/shared";

export const internshipTracks: InternshipTrack[] = [
  {
    slug: "python-developer",
    title: "Python Developer Internship",
    domain: "Backend + AI Automation",
    durationWeeks: 12,
    stipendMode: "no_stipend",
    cycles: [
      { id: "g1", title: "Python Fundamentals", outcome: "Build APIs and scripting tools" },
      { id: "g2", title: "Data + SQL", outcome: "Design production-ready relational schemas" },
      { id: "g3", title: "Backend Projects", outcome: "Ship portfolio-grade services" }
    ]
  },
  {
    slug: "fullstack-engineer",
    title: "Fullstack Engineer Internship",
    domain: "React + Node + System Design",
    durationWeeks: 16,
    stipendMode: "stipend",
    cycles: [
      { id: "g1", title: "Web Core", outcome: "Build accessible interfaces" },
      { id: "g2", title: "API + DB", outcome: "Ship full CRUD services" },
      { id: "g3", title: "Team Sprint", outcome: "Deliver features in agile format" }
    ]
  }
];

export const enrollmentPlans: EnrollmentPlan[] = [
  {
    baseAmount: 1000,
    couponCode: "NEXTRAIN25",
    payableAmount: 750,
    totalRefundCap: 500,
    refundMilestones: [
      { cycle: "g1", amount: 150, requiresMentorApproval: true },
      { cycle: "g2", amount: 150, requiresMentorApproval: true },
      { cycle: "g3", amount: 200, requiresMentorApproval: true }
    ]
  }
];

export const certificates: CertificateRecord[] = [];
