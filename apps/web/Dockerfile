FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN pnpm install --frozen-lockfile=false

COPY . .
RUN pnpm --filter @nextrain/web build

EXPOSE 3000
CMD ["pnpm", "--filter", "@nextrain/web", "start"]
