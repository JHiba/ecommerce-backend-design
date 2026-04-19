import React from 'react';

const Login = ({ setPage }) => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] py-12">
      <div className="w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-soft p-10 rounded-3xl relative overflow-hidden group">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-dark mb-2">Welcome Back</h2>
            <p className="text-secondary font-medium text-sm">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setPage('home'); }}>
            <div>
              <label className="block text-sm font-bold text-dark mb-1.5 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-dark mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full bg-white/50 border border-white/60 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark transition-all"
                required
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-secondary">
                <input type="checkbox" className="w-4 h-4 rounded border-white text-primary focus:ring-primary" />
                Remember me
              </label>
              <a href="#" className="text-sm font-bold text-primary-dark hover:text-primary transition-colors">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 mt-4"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm font-medium text-secondary mt-8">
            Don't have an account? <a href="#" className="font-bold text-primary-dark hover:text-primary transition-colors">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
