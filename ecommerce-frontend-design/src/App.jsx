import React, { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Deals from './components/Deals';
import CategorySection from './components/CategorySection';

import Footer from './components/Footer';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Orders from './components/Orders';
import Login from './components/Login';
import Admin from './components/Admin';

// Category Banner Images
import homeBanner from './assets/Image/backgrounds/image 98.png';
import electronicsBanner from './assets/Image/backgrounds/image 106.png';



function App() {
  const navigate = useNavigate();

  const setPage = (pageName) => {
    switch (pageName) {
      case 'home': navigate('/'); break;
      case 'listing': navigate('/products'); break;
      case 'details': navigate('/products/1'); break;
      case 'cart': navigate('/cart'); break;
      case 'profile': navigate('/profile'); break;
      case 'message': navigate('/message'); break;
      case 'orders': navigate('/orders'); break;
      case 'login': navigate('/login'); break;
      case 'admin': navigate('/admin'); break;
      default: navigate('/'); break;
    }
  };
  const [searchQuery, setSearchQuery] = useState('');

  const [homeAndOutdoorItems, setHomeAndOutdoorItems] = useState([]);
  const [electronicsItems, setElectronicsItems] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/products?limit=20`) // Fetch more for home page
      .then(res => res.json())
      .then(data => {
        // data.products is the array now
        const allProducts = data.products || [];
        setHomeAndOutdoorItems(allProducts.filter(item => item.category === 'home').slice(0, 8));
        setElectronicsItems(allProducts.filter(item => item.category === 'electronics').slice(0, 8));
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);


  const HomeContent = () => (
    <div className="container">
      <Hero />
      <Deals />

      <CategorySection
        title="Home and outdoor"
        bannerBg="#FFE6BF"
        bannerImg={homeBanner}
        items={homeAndOutdoorItems}
        setPage={setPage}
      />

      <CategorySection
        title="Consumer electronics"
        bannerBg="#E5F1FF"
        bannerImg={electronicsBanner}
        items={electronicsItems}
        setPage={setPage}
      />

     
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header setPage={setPage} setSearchQuery={setSearchQuery} />

      <main className="flex-grow pb-12">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/products" element={<ProductListing setPage={setPage} searchQuery={searchQuery} />} />
          <Route path="/products/:id" element={<ProductDetails setPage={setPage} />} />
          <Route path="/cart" element={<Cart setPage={setPage} />} />
          <Route path="/profile" element={<Profile setPage={setPage} />} />
          <Route path="/message" element={<Messages setPage={setPage} />} />
          <Route path="/orders" element={<Orders setPage={setPage} />} />
          <Route path="/login" element={<Login setPage={setPage} />} />
          <Route path="/admin" element={<Admin setPage={setPage} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

