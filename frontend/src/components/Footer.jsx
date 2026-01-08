import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark">WasteMate</h2>
          <p className="max-w-md text-sm text-text-sub-light dark:text-text-sub-dark">
            An open-source academic initiative dedicated to solving modern waste challenges through artificial intelligence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-text-main-light dark:text-text-main-dark">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">University Affiliations</a>
          <a className="hover:text-primary transition-colors" href="#">Documentation</a>
        </div>
        <div className="text-sm text-text-sub-light dark:text-text-sub-dark">
          © 2023 WasteMate. Academic Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;