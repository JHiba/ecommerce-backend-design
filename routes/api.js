const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_123';

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Admin access required" });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// 1. Search Route (Find items by typing a word)
router.get('/products/search', async (req, res) => {
  try {
    const query = req.query.q || '';
    // $regex smartly searches for partial words like 'lamp', ignoring upper/lowercase
    const products = await Product.find({ name: { $regex: query, $options: 'i' } });
    res.json(products);
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ message: "Search Error" });
  }
});

// 2. Single Product Route (Fetches details when an item card is clicked)
router.get('/products/details/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error("ID Fetch Error:", error);
    res.status(500).json({ message: "ID Fetch Error" });
  }
});

// 3. Main Products Route (Everything we did earlier today!)
router.get('/products', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter).skip(skip).limit(limit);

    res.json({
      products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total
    });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Server Error loading products" });
  }
});

// 4. Create Product Route (Protected by JWT Admin Check)
router.post('/products', verifyAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
});

module.exports = router;
