# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.16.0
ARG PNPM_VERSION=8.15.5

FROM node:${NODE_VERSION} as installer

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

COPY . .
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile \
    && pnpm build

FROM node:${NODE_VERSION} as builder

ENV NODE_ENV production

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --prod --frozen-lockfile

FROM nginx:alpine

WORKDIR /app

ENV NODE_ENV production

COPY --from=installer /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
