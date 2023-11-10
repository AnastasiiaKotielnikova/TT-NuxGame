# Use an official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript
RUN npm install -g typescript

# Copy the rest of your application code
COPY . .

# Expose the default Playwright port
EXPOSE 4444

# Command to run your Playwright tests
CMD ["npx", "playwright", "test"]