# Step 1: Use a Node.js base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Expose the port that the app will run on
EXPOSE 3000

# Step 8: Start the Next.js app
CMD ["npm", "run", "start"]
