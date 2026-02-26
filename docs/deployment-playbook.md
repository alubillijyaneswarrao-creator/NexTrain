# NexTrain Deployment Playbook

This guide gives you a production path for getting a real public link quickly.

## Option A (fastest): Vercel (web) + Render (api)

### 1) Push repository to GitHub
```bash
git remote add origin <your-repo-url>
git push -u origin work
```

### 2) Deploy Web (`apps/web`) on Vercel
1. Sign in to Vercel.
2. Import your GitHub repo.
3. Set **Root Directory** = `apps/web`.
4. Framework preset = **Next.js**.
5. Add env vars:
   - `NEXT_PUBLIC_API_BASE_URL=https://<your-render-api>.onrender.com`
6. Deploy.

You will get a public URL like:
- `https://nextrain-web.vercel.app`

### 3) Deploy API (`apps/api`) on Render
1. Sign in to Render, create **Web Service** from same repo.
2. Set:
   - Root Directory: `apps/api`
   - Build Command: `corepack enable && pnpm install --frozen-lockfile=false && pnpm build`
   - Start Command: `pnpm start`
3. Add env vars:
   - `PORT=8080`
4. Deploy.

You will get a public URL like:
- `https://nextrain-api.onrender.com`

### 4) Verify live services
- Web: open Vercel URL.
- API health: `https://<api>/health`

## Option B: Single VPS via Docker (Coolify/Portainer/manual)
- Build from the included Dockerfiles and route domains via Nginx/Caddy.
- Recommended domains:
  - `app.nextrain.in` → web
  - `api.nextrain.in` → api

## Post-deploy checklist
- [ ] Add PostgreSQL and connect API.
- [ ] Enable OTP provider credentials.
- [ ] Set payment keys (Razorpay/Stripe).
- [ ] Add certificate signing secret.
- [ ] Add monitoring (Sentry + logs).
