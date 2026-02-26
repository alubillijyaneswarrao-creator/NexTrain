FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN pnpm install --frozen-lockfile=false

COPY . .
RUN pnpm --filter @nextrain/api build

EXPOSE 8080
CMD ["pnpm", "--filter", "@nextrain/api", "start"]
