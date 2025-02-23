# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies and Storybook globally
RUN npm install && npm install -g @storybook/cli

# Ensure public and Storybook config directories exist before copying
RUN mkdir -p /app/public /app/.storybook

# Copy public folder separately
COPY public /app/public

# Copy .storybook folder separately
COPY .storybook /app/.storybook

# Copy all remaining files
COPY . /app/

# Verify Storybook config exists
RUN ls -la /app/.storybook || echo "Storybook config directory not found"

# Ensure build-storybook is available
RUN npx build-storybook -c .storybook -o build/storybook || (echo "Error during Storybook build" && exit 1)

# Expose port 8083
EXPOSE 8083

# Start Storybook
CMD ["npm", "run", "storybook", "--", "--no-open"]
