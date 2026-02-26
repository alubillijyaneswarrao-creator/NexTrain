# NexTrain Startup Blueprint (Training + Internship)

## 1) Product Vision
NexTrain is a training + internship platform focused on employability with low-cost access, OTP-based onboarding, role dashboards, and a cycle-driven growth model (G1, G2, G3...).

## 2) Tech Stack (Production-Ready)
- **Frontend:** Next.js 14 + TypeScript + App Router.
- **Backend:** Fastify + TypeScript + Zod validation.
- **Shared contracts:** Workspace package (`@nextrain/shared`).
- **Database (recommended next):** PostgreSQL + Prisma.
- **Auth (recommended next):** OTP provider (MSG91 / Twilio / Firebase Auth).
- **Payments:** Razorpay / Stripe.
- **Email:** Resend / AWS SES.
- **Video classes:** Record using OBS + stream via YouTube unlisted / Vimeo / Cloudflare Stream.
- **Live sessions:** 100ms / Agora / Google Meet embed integration.
- **AI services:** OpenAI / Claude for evaluation rubrics and student assistant chatbot.

## 3) Platform Modules
1. Landing page and internship-specific curriculum pages.
2. Student dashboard: task submission, stars, refund progress, interview status.
3. Mentor dashboard: assigned learners, reviews, scoring, feedback.
4. Admin dashboard: full CRUD + coupon + refunds + analytics.
5. Interview Lab: coding question panel + test cases + live video section + evaluation notes.
6. Coupon and refund engine.
7. Certificate issuance + verification link.

## 4) Curriculum Framework (Scratch-Built)
### Training Curriculum (Common)
- **T1 (Foundation):** programming basics, Git, communication.
- **T2 (Domain):** web/backend/data/AI basics by selected track.
- **T3 (Build):** guided mini project.
- **T4 (Deploy):** production deploy, documentation, resume bullets.

### Internship Curriculum (Cycle Model)
- **G1:** fundamentals + 1 guided task.
- **G2:** intermediate project + mentor checkpoint.
- **G3:** team collaboration + code reviews.
- **G4:** production simulation + client-style presentation.
- Weekly Sunday live session for premium learners.

## 5) Stipend Models
- **No-Stipend Track:** lower entry fee + star progression + refund milestones.
- **Stipend Track:** funded by partner sponsors, CSR pools, and client projects.

## 6) Funding Strategy (Actionable)
1. Build a **1-page sponsor deck** (problem, impact, numbers, ask, ROI).
2. Run outreach to:
   - CSR teams at IT companies.
   - EdTech seed funds.
   - Startup incubators / accelerators.
   - Local industry associations and chambers.
3. Offer sponsor benefits:
   - Co-branding on internship batches and events.
   - Early hiring pipeline access.
   - Logo on verified certificates and reports.
4. Maintain CRM sheet: contact, status, follow-up dates, outcome.
5. Target conversion funnel: 1000 outreach -> 100 replies -> 20 meetings -> 3 pilots.

## 7) Mentor Acquisition Strategy
- Source from LinkedIn, GitHub, indie communities, alumni groups, Discord tech servers.
- Start with part-time + clear per-session/per-evaluation payouts.
- Build mentor scorecards (student outcomes, quality score, response SLA).
- Incentivize with progressive pay hikes and recognition.

## 8) Government/Recognition Strategy (India-oriented checklist)
1. Register entity (Private Limited/LLP).
2. GST, PAN, TAN, bank account.
3. Apply Startup India recognition.
4. Build internal quality process and evaluation standards.
5. For certification credibility:
   - Add digital verification URL + certificate ID.
   - Partner with known industry mentors/companies.
   - Publish project evidence and rubrics.

## 9) Refund Mechanics Example
- Course price: ₹1000.
- Coupon reduces to ₹750.
- Student can earn back up to ₹500 through milestone completion.
- Remaining margin covers operations, mentors, tooling.

## 10) Execution Phases
1. **Phase 1 (0-4 weeks):** MVP launch (landing, OTP auth, one internship page, dashboards).
2. **Phase 2 (5-8 weeks):** interview lab, coupons, payment/refund workflow.
3. **Phase 3 (9-12 weeks):** mentor scaling, sponsor outreach engine, certificate verification.
4. **Phase 4:** full analytics, AI evaluator, multi-track expansion.
