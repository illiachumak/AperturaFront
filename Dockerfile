# Use the official Node.js image as a base image
FROM  node:18-alpine

# Set the working directory in the container
WORKDIR /app 

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 80

# Set the command to run your app
CMD ["npm", "run", "dev"]