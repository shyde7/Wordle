# Use a lightweight Node.js image
FROM node:16-bullseye

# Set the working directory inside the container
WORKDIR /screens

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy package.json and package-lock.json for dependency installation
COPY package.json ./

# Install all dependencies from package.json
RUN npm install

# Copy the rest of your project files
COPY . .

# Expose the ports required by Expo
EXPOSE 19000 19001 19002

# Start the Expo development server
CMD ["npm", "start"]
