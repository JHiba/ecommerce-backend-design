require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const aestheticProducts = [
  // Flash Deals
  { name: "Pastel Keyboards", price: "99", discount: "-25%", category: "deal", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300" },
  { name: "Plush Accessories", price: "24", discount: "-15%", category: "deal", image: "https://images.unsplash.com/photo-1588666305173-04508c9bfc47?w=300" },
  { name: "Polaroid Cameras", price: "120", discount: "-40%", category: "deal", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300" },
  { name: "Wireless Buds", price: "55", discount: "-25%", category: "deal", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300" },
  { name: "Aesthetic Mugs", price: "30", discount: "-25%", category: "deal", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300" },

  // Home & Outdoor
  { name: "Pastel Desk Mat", price: "24", category: "home", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300" },
  { name: "Velvet Cloud Chair", price: "189", category: "home", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300" },
  { name: "Ceramic Mug Set", price: "35", category: "home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300" },
  { name: "Rose Gold Lamp", price: "60", category: "home", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300" },
  { name: "Matcha Whisk Kit", price: "28", category: "home", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300" },
  { name: "Minimalist Clocks", price: "45", category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd0e?w=300" },
  { name: "Fluffy Throw Pillows", price: "19", category: "home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300" },
  { name: "Aesthetic Coasters", price: "15", category: "home", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=300" },

  // Electronics
  { name: "Mint Smartwatch", price: "149", category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { name: "Vintage Film Camera", price: "189", category: "electronics", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300" },
  { name: "Lavender Headphones", price: "120", category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { name: "Pastel Phone Case", price: "25", category: "electronics", image: "https://images.unsplash.com/photo-1586953208448-b95a79491f20?w=300" },
  { name: "White Keycaps", price: "35", category: "electronics", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300" },
  { name: "Slim Metallic Laptop", price: "850", category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300" },
  { name: "Wireless Ring Light", price: "45", category: "electronics", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300" },
  { name: "Sleek Speaker", price: "95", category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300" }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected. Preparing to Seed...");
    
    await Product.deleteMany({}); // Clears out any old garbage
    console.log("- Prepped empty slate!");

    await Product.insertMany(aestheticProducts);
    console.log(`🎉 Success! Seeded all ${aestheticProducts.length} items to Atlas!`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Script failed:", error);
    process.exit(1);
  }
}

seedDatabase();
