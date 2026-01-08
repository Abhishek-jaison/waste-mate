import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">WasteMate</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
          <button onClick={() => navigate('/workflow')} className="text-sm font-medium hover:text-primary transition-colors">View workflow</button>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#tech-stack">Technology stack</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/upload')} className="hidden md:flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            <span>Upload</span>
          </button>
          <button className="flex md:hidden items-center justify-center text-text-main-light dark:text-text-main-dark">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;