const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    // Week 1 static placeholder. 
    // Week 2 will fetch this from MongoDB.
    res.json([
        { id: 1, name: "Sample Product", price: 99.99 }
    ]);
});

module.exports = router;
