// const express = require("express");
// const path = require("path");
// const app = express();

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Let our app speak JSON and allow frontend communication
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));


// Serve static React files from public
app.use(express.static(path.join(__dirname, "public")));

const apiRouter = require('./routes/api');
app.use("/api", apiRouter);
const authRoutes = require('./routes/auth');
app.use("/api/auth", authRoutes);

// For all other routes, serve the React app (SPA fallback)
app.use((req, res, next) => {
    // If it's an API route that wasn't found, don't serve HTML
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server (Conditionally start if running locally, export for Vercel)
if (process.env.NODE_ENV !== 'production' || process.env.RENDER) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;