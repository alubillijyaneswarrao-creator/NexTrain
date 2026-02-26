# NexTrain

A full-stack starter for a training + internship startup with role dashboards, internship curriculum pages, OTP-ready auth APIs, coupon/refund flow, interview-lab UI, certificate verification, and chatbot scaffolding.

## Monorepo Structure
- `apps/web`: Next.js portal UI (landing, internship detail, dashboards, pricing, interview lab)
- `apps/api`: Fastify backend (auth, internships, coupons, payments, tasks, interviews, certificates, chatbot)
- `packages/shared`: shared TypeScript contracts
- `docs/startup-blueprint.md`: real-world startup execution plan
- `docs/figma-wireframe-spec.md`: structured UI blueprint to implement in Figma
- `docs/deployment-playbook.md`: live deployment steps (Vercel + Render + Docker)

## Quick Start
```bash
pnpm install
pnpm dev
```

- Web app: `http://localhost:3000`
- API app: `http://localhost:8080`

## API Modules Included
- `/auth`: OTP request + verify scaffold
- `/internships`: internship listing + detail
- `/dashboard/:role`: role-specific metrics
- `/coupons/apply`: coupon + refund-plan preview
- `/payments/checkout`: payable amount + refund milestones
- `/tasks/submit`: internship task submission scaffold
- `/interviews/layout` + `/interviews/invite-email`: interview experience endpoints
- `/certificates/issue` + `/certificates/verify/:id`: certificate lifecycle
- `/chatbot/ask`: student/mentor/admin query assistant scaffold

## Deployment
Use `docs/deployment-playbook.md` for step-by-step public deployment.

Expected public endpoints after deployment:
- Web portal: `https://<your-vercel-project>.vercel.app`
- API: `https://<your-render-service>.onrender.com/health`

## Suggested Purchases/Investments
- Domain + managed DNS
- OTP provider (MSG91/Twilio)
- Cloud deployment (Vercel + Railway/Render)
- Transactional email provider (Resend/SES)
- Payment gateway setup (Razorpay/Stripe)
- Video/live streaming APIs (100ms/Agora)
- AI evaluation/chatbot API keys

## Remaining Production Tasks
1. Add PostgreSQL + Prisma models for users, internships, tasks, stars, refunds, certificates.
2. Implement secure OTP auth and session management (JWT refresh, rate limit, audit logs).
3. Add payment webhook handling and refund settlement automation.
4. Add secure code execution sandbox for interview coding rounds.
5. Add observability and role-based permission middleware.
