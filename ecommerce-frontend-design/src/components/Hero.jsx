import React from 'react';
import bannerImg from '../assets/Image/backgrounds/Banner-board-800x420 2.png';

const Hero = () => {
  const categories = [
    "Automobiles", "Clothes and wear", "Home interiors", "Computer and tech", 
    "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"
  ];

  return (
    <section className="mt-6 mb-12">
      <div className="flex gap-6 h-[460px]">
        {/* Left Categories (Floating Pill Style) */}
        <div className="w-72 flex-shrink-0 bg-white/60 rounded-3xl p-4 shadow-soft border border-white/50 backdrop-blur-md hidden md:block">
          <h3 className="text-dark font-bold text-lg mb-4 px-2">Top Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li 
                key={index} 
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 font-semibold flex items-center justify-between group ${index === 0 ? 'bg-primary-light shadow-sm text-primary-dark translate-x-2' : 'text-dark-light hover:bg-white/80 hover:text-primary-dark hover:translate-x-2'}`}
              >
                {cat}
                <svg className={`w-4 h-4 transition-opacity ${index === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Banner (Expanded Width) */}
        <div 
          className="flex-1 relative rounded-3xl overflow-hidden shadow-glow group"
        >
           {/* Beautiful pastel gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-white/40 to-transparent z-0"></div>
           <div 
             className="absolute inset-0 bg-cover bg-no-repeat bg-right mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-[1500ms]"
             style={{ backgroundImage: `url("${bannerImg}")` }}
           ></div>
           
           <div className="relative z-10 w-full md:w-3/4 h-full flex flex-col justify-center px-12">
             <div className="inline-block px-4 py-1.5 rounded-full bg-accent-pink/50 border border-accent-pink text-primary-dark text-sm font-bold tracking-wider mb-6 w-max backdrop-blur-sm shadow-sm">
               🌟 NEW ARRIVALS 
             </div>
             <h2 className="text-5xl md:text-6xl font-extrabold text-dark leading-tight mb-6 drop-shadow-sm">
               Experience<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-secondary">Pastel Elegance.</span>
             </h2>
             <p className="text-dark-light font-medium text-lg max-w-md mb-8">
               Discover our latest spring collection featuring soft tones, glass aesthetics, and premium layouts crafted specifically for you.
             </p>
             <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-soft hover:shadow-glow hover:-translate-y-1 w-max text-lg flex items-center gap-3">
               Shop the Collection 
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
