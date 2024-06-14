# Use an official Node.js slim image as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install serve globally (optional if already installed)
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 80

# Start the app on port 8080
CMD ["serve", "-s", "build", "-l", "80"]
