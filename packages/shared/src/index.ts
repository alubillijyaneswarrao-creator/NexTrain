export type UserRole = "student" | "mentor" | "admin";

export interface InternshipTrack {
  slug: string;
  title: string;
  domain: string;
  durationWeeks: number;
  cycles: Array<{ id: string; title: string; outcome: string }>;
  stipendMode: "no_stipend" | "stipend";
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  active: boolean;
}

export interface EnrollmentPlan {
  baseAmount: number;
  couponCode?: string;
  payableAmount: number;
  totalRefundCap: number;
  refundMilestones: Array<{ cycle: string; amount: number; requiresMentorApproval: boolean }>;
}

export interface CertificateRecord {
  certificateId: string;
  studentName: string;
  track: string;
  issueDateISO: string;
  verificationUrl: string;
}
