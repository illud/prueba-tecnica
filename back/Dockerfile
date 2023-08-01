# Step 1: Create a Docker image based on Node.js
FROM node:18-alpine

# Step 2: Create and set the working directory in the Docker image
WORKDIR /back

# Step 3: Copy the necessary files (package.json and package-lock.json or yarn.lock)
COPY package*.json ./

# Step 4: Copy the built NestJS application files into the Docker image
COPY . .

# Step 5: Install dependencies
RUN npm install

# Step 6: Run prisma generate
RUN npx prisma generate --schema /back/src/prisma/schema.prisma
RUN npx prisma migrate dev --schema /back/src/prisma/schema.prisma

# Step 7: Expose the port your NestJS application is listening on
EXPOSE 3001

# Step 8: Define the command to run your NestJS application inside the container
CMD ["npm", "start"]
