import React, { useState } from 'react';

const Admin = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (!token) {
      setMessage('Unauthorized. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Product added successfully to MongoDB!');
        setFormData({ name: '', price: '', category: '', image: '', description: '' });
      } else {
        setMessage(data.message || 'Failed to add product');
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="container py-12 min-h-[70vh]">
      <h2 className="text-3xl font-extrabold mb-6 text-dark flex items-center gap-4">
        Admin Dashboard
        <span className="text-sm bg-accent-pink text-primary-dark px-3 py-1 rounded-full">Secured by JWT</span>
      </h2>
      
      <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-soft max-w-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10 group-hover:scale-150 transition-transform duration-700"></div>

        <h3 className="text-xl font-bold mb-4 text-primary">Add New Product</h3>
        
        {message && <div className="p-4 mb-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg font-bold shadow-sm">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-dark mb-1 ml-1">Product Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-dark mb-1 ml-1">Price ($)</label>
              <input 
                type="number" 
                required
                step="0.01"
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-dark mb-1 ml-1">Category</label>
              <select 
                required
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all appearance-none"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category...</option>
                <option value="home">Home & Outdoor</option>
                <option value="electronics">Consumer Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-1 ml-1">Image URL</label>
            <input 
              type="text" 
              required
              placeholder="e.g. https://example.com/image.png"
              className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
              value={formData.image}
              onChange={e => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-1 ml-1">Description</label>
            <textarea 
              rows="3"
              className="w-full bg-white/50 border border-white/60 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 mt-4">
            Publish Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
