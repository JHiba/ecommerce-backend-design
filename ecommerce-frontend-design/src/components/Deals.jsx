import watchImg from '../assets/Image/tech/8.png';
import laptopImg from '../assets/Image/tech/image 23.png';
import goproImg from '../assets/Image/tech/image 29.png';
import headphonesImg from '../assets/Image/tech/image 34.png';
import canonImg from '../assets/Image/tech/image 85.png';
import React, { useState, useEffect } from 'react';

const Deals = ({ setPage }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/api/products?category=deal`)
      .then(res => res.json())
      .then(data => {
        const items = data.products || data;
        setDeals(items.slice(0, 5));
      })
      .catch(err => console.error("Error fetching deals:", err));
  }, []);



  return (
    <section className="card mt-10 flex flex-col md:flex-row overflow-hidden border-none bg-white/70">
      {/* Timer Section */}
      <div className="w-full md:w-72 p-8 border-b md:border-b-0 md:border-r border-white flex flex-col justify-center bg-gradient-to-b from-transparent to-primary-light/50">
        <h3 className="text-2xl font-bold text-primary-dark mb-2">Flash Deals</h3>
        <p className="text-secondary mb-6 font-medium">Limited time offers</p>
        <div className="flex gap-3">
          {['02', '07', '21', '34'].map((time, i) => (
            <div key={i} className="w-12 h-14 bg-white rounded-lg flex flex-col items-center justify-center text-dark shadow-sm border border-white/60 backdrop-blur-sm hover:-translate-y-1 transition-transform">
              <span className="text-lg font-bold text-primary-dark">{time}</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                {i === 0 ? 'Days' : i === 1 ? 'Hour' : i === 2 ? 'Min' : 'Sec'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Grid */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-full">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-center text-center border-r border-b lg:border-b-0 last:border-r-0 border-white/50 cursor-pointer hover:bg-white/80 transition-all duration-300 group"
            onClick={() => setPage('details')}
          >
            <div className="w-full aspect-square bg-transparent rounded-xl flex items-center justify-center mb-4 p-2 relative">
               <div className="absolute inset-0 bg-primary-light/30 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
               <img src={deal.image} alt={deal.name} className="max-w-[85%] max-h-[85%] object-contain relative z-10 group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
            </div>
            <p className="text-dark font-semibold text-sm mb-3 group-hover:text-primary-dark transition-colors">{deal.name}</p>
            <span className="bg-accent-pink/30 text-primary-dark border border-accent-pink/50 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              {deal.discount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
