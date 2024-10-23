# Stage 1: Build the application
FROM node:18-slim AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine AS production

# Install serve to serve the app
RUN npm install -g serve

# Copy the built app from the build stage
COPY --from=build /app/build /app/build

# Expose the port
EXPOSE 4173

# Run the app
CMD ["serve", "-s", "/app/build", "-l", "4173"]
