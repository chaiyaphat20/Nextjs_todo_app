FROM node:20-alpine3.18 AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine3.18  AS builder
WORKDIR /app
COPY . .
COPY --from=base /app/node_modules ./node_modules

RUN npm install -g npm@10.2.5

RUN npm run build

FROM node:20-alpine3.18 AS runner
WORKDIR /app
ENV NODE_ENV production
ENV APP_ENV Production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/messages ./messages

EXPOSE 3000

CMD [ "npm", "start"]
