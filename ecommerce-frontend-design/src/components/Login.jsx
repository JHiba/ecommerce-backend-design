import React, { useState } from 'react';

const Login = ({ setPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const url = isLogin 
      ? '/api/auth/login' 
      : '/api/auth/register';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      if (isLogin) {
        // Save the secure token to local storage!
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        
        // If admin, go to admin dashboard, else home
        if (data.role === 'admin') {
           setPage('admin');
        } else {
           setPage('home');
        }
      } else {
        setSuccess('Account created! Please sign in.');
        setIsLogin(true); // Switch to login view
        setPassword('');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] py-12">
      <div className="w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-soft p-10 rounded-3xl relative overflow-hidden group">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-dark mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-secondary font-medium text-sm">
              {isLogin ? 'Please enter your details to sign in.' : 'Fill in your details to get started.'}
            </p>
          </div>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm font-bold">{error}</div>}
          {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-sm font-bold">{success}</div>}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-dark mb-1.5 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-dark mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-secondary">
                  <input type="checkbox" className="w-4 h-4 rounded border-white text-primary focus:ring-primary" />
                  Remember me
                </label>
                <a href="#" className="text-sm font-bold text-primary-dark hover:text-primary transition-colors">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 mt-4"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm font-medium text-secondary mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              className="font-bold text-primary-dark hover:text-primary transition-colors"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
