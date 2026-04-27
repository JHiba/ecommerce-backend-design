# E-Commerce Full-Stack Project

This is a modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). It includes features like user authentication, an admin dashboard, and product pagination.

## Features
- User Registration and Login with JWT authentication
- Secure Admin Dashboard for adding products
- Server-side pagination for loading products efficiently
- Responsive UI built with React and Tailwind CSS

## Tech Stack
- Frontend: React.js, Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Security: JSON Web Tokens (JWT), bcrypt.js

## How to Run Locally

1. Clone the repository and install backend dependencies:
   ```bash
   git clone https://github.com/JHiba/ecommerce-backend-design.git
   cd ecommerce-backend-design
   npm install
   ```

2. Set up your environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=3000
   ```

3. Start the application:
   ```bash
   node app.js
   ```

4. Open `http://localhost:3000` in your browser.
