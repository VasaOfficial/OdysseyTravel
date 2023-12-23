# Build stage
FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --loglevel verbose

COPY . .

# RUN npm run build

# Runtime stage
# FROM node:21-alpine

#WORKDIR /app

# Copy only necessary files from the build stage
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package*.json ./

CMD ["npm", "run", "dev"]