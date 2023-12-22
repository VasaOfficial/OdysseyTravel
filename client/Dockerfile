# Build stage
FROM node:21-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --loglevel verbose

COPY . .

RUN npm run build

# Cleanup unnecessary dependencies
RUN npm prune --production

# Runtime stage
FROM node:21-alpine

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]