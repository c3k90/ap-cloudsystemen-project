# Simple Alpine-based dev container with Node.js and TypeScript
FROM mcr.microsoft.com/devcontainers/base:alpine-3.20

# Install Node.js, npm, and TypeScript globally
RUN apk add --no-cache nodejs npm \
    && npm install -g typescript \
    && npm cache clean --force
