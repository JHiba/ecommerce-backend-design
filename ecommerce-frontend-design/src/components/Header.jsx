import React from 'react';
import { Search, User, MessageSquare, Heart, ShoppingCart, Menu, ChevronDown, LogIn } from 'lucide-react';
import logo from '../assets/Layout/Brand/logo-colored.png';
import flagDE from '../assets/Layout1/Image/flags/DE@2x.png';

const Header = ({ setPage }) => {
  return (
    <header className="glass-header">
      {/* Top Header - Restructured to be airy and modern */}
      <div className="container py-4 flex items-center justify-between gap-6 relative">
        
        {/* Left Side: Navigation Links (Moved from bottom) */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-dark flex-1">
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors bg-white/40 px-4 py-2 rounded-full" onClick={() => setPage('listing')}>
            <Menu className="w-5 h-5 opacity-80" />
            <span>Categories</span>
          </div>
          <a href="#" className="hover:text-primary hover:scale-105 transition-all text-sm drop-shadow-sm" onClick={(e) => { e.preventDefault(); setPage('listing'); }}>Offers</a>
          <a href="#" className="hover:text-primary hover:scale-105 transition-all text-sm drop-shadow-sm">Gifts</a>
        </nav>

        {/* Center: Brand Logo */}
        <div className="flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-110 flex-1" onClick={() => setPage('home')}>
          <img src={logo} alt="Brand" className="h-[40px] drop-shadow-sm" />
        </div>

        {/* Right Side: Sleek Search & Icons */}
        <div className="flex items-center justify-end gap-5 flex-1">
          
          {/* Compact Pill Search */}
          <div className="hidden md:flex rounded-full shadow-soft bg-white/60 backdrop-blur-md border border-white/50 p-1 w-64 hover:w-80 transition-all duration-500 group focus-within:w-80">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent px-4 py-1.5 outline-none text-dark text-sm"
            />
            <button
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full shadow-soft transition-all duration-300 hover:rotate-6 flex items-center justify-center cursor-pointer"
              onClick={() => setPage('listing')}
            >
              <Search size={16} strokeWidth={3} />
            </button>
          </div>

          <div className="flex items-center gap-2">
             <div className="p-2 cursor-pointer text-secondary hover:text-primary transition-all hover:-translate-y-1 bg-white/50 rounded-full shadow-sm" onClick={() => setPage('login')} title="Login">
               <LogIn className="w-5 h-5" />
             </div>
             <div className="p-2 cursor-pointer text-secondary hover:text-primary transition-all hover:-translate-y-1 bg-white/50 rounded-full shadow-sm" onClick={() => setPage('profile')} title="Profile">
               <User className="w-5 h-5" />
             </div>
             <div className="p-2 cursor-pointer text-secondary hover:text-primary transition-all hover:-translate-y-1 bg-white/50 rounded-full shadow-sm relative" onClick={() => setPage('cart')} title="Cart">
               <ShoppingCart className="w-5 h-5" />
               <span className="absolute -top-1 -right-1 bg-accent-pink text-primary-dark text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">2</span>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

