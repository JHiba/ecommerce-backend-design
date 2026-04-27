# 🛍️ Full-Stack E-Commerce Application

A modern, responsive, and robust full-stack e-commerce platform built with the **MERN** stack (MongoDB, Express, React, Node.js). This project features a beautiful glassmorphic UI, secure JWT-based authentication, an Admin dashboard for inventory management, and heavily optimized server-side pagination.

![E-Commerce Banner](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop)

---

## ✨ Key Features

- **Modern UI/UX**: Aesthetic glassmorphism design with responsive components built using React and Tailwind CSS.
- **Secure Authentication**: Fully functional User Registration and Login flow utilizing `bcryptjs` for password hashing and `jsonwebtoken` (JWT) for secure, stateless sessions.
- **Admin Dashboard**: Role-based access control (RBAC). Admin users can securely create and publish new products directly to the database via a protected portal.
- **Server-Side Pagination**: Highly optimized MongoDB queries utilizing `.skip()` and `.limit()` to effortlessly handle large product datasets without crashing the server or browser.
- **Search & Filtering**: Dynamic product searching functionality via a custom Express endpoint utilizing MongoDB Regex indexing.
- **Single Page Application**: Fast client-side routing via React Router DOM. 

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)

**Backend**
- Node.js & Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose (ODM)
- JSON Web Token (Authentication)
- Bcrypt.js (Security)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/) installed on your machine.
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster and Connection URI.

### 1. Clone the Repository
```bash
git clone https://github.com/JHiba/ecommerce-backend-design.git
cd ecommerce-backend-design
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_key_here
PORT=3000
```

### 4. Build the Frontend
Navigate into the frontend folder, install the React dependencies, and build the static files. Our Express server is configured to serve the `dist` folder automatically!
```bash
cd ecommerce-frontend-design
npm install
npm run build
```
*Note: Make sure to copy the contents of `dist` into the root `public` directory if deploying on a unified server setup.*

### 5. Seed the Database (Optional)
If you want to start with a database full of beautiful sample products, run the seeding script:
```bash
# From the root directory
node seed.js
```

### 6. Run the Server
```bash
node app.js
```
The server will now be running at `http://localhost:3000`. Navigate to this URL in your browser to view the application!

---

## 📡 Core API Endpoints

### Authentication Endpoints
- `POST /api/auth/register` - Create a new user account.
- `POST /api/auth/login` - Authenticate user and receive a signed JWT.

### Product Endpoints
- `GET /api/products` - Fetch all products (supports `?page=x&limit=y` and `?category=z`).
- `GET /api/products/search` - Search products by keyword (supports `?q=query`).
- `GET /api/products/details/:id` - Fetch details for a specific item.
- `POST /api/products` - (Admin Only) Create a new product. Requires `Authorization: Bearer <token>` header.

---

## 👨‍💻 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
This project is open-source and available under the MIT License.
