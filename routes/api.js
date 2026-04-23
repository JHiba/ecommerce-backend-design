const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

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
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Server Error loading products" });
  }
});

module.exports = router;
