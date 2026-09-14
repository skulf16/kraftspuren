# kraftspuren Website - Next.js (App liegt in site/)

FROM node:22-alpine AS builder
WORKDIR /app
COPY site/package.json site/package-lock.json ./
RUN npm ci
COPY site/ .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Terminampel-Status (Dateispeicher) - in Coolify ein Volume auf /app/data legen,
# sonst geht der Status bei jedem Redeploy verloren
COPY --from=builder /app/data ./data

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
