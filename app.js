const express = require("express");
const path = require("path");
const app = express();

// Serve static React files from public
app.use(express.static(path.join(__dirname, "public")));

// Define a simple API router for Week 2 extensions
const apiRouter = require('./routes/api');
app.use("/api", apiRouter);

// For all other routes, serve the React app (SPA fallback)
app.use((req, res, next) => {
    // If it's an API route that wasn't found, don't serve HTML
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});