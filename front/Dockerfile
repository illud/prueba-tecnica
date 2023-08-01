# Step 1: Create a Docker image based on Node.js
FROM node:18-alpine

# Step 2: Create and set the working directory in the Docker image
WORKDIR /front

# Step 3: Copy the necessary files (package.json and package-lock.json or yarn.lock)
COPY package*.json ./

# Step 4: Install production dependencies
RUN npm ci --only=production

# Step 5: Copy the built Next.js application files into the Docker image
COPY . .

# Step 6: Expose the port your Next.js application is listening on
EXPOSE 3000

# Step 7: Define the command to run your Next.js application inside the container
CMD ["next", "dev"]
