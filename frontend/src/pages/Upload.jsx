import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Upload = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-400 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[800px] flex flex-col gap-8 relative z-0">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              AI Recognition
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-main-light dark:text-text-main-dark">
              Waste Analysis
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark text-lg font-normal leading-relaxed max-w-lg mx-auto">
              Identify and optimize resources with computer vision. Upload your image to get instant classification.
            </p>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-border-light dark:border-border-dark p-8">
            <div className="group relative flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary bg-background-light dark:bg-background-dark/50 transition-all duration-300 px-6 py-16 cursor-pointer">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center z-10">
                <p className="text-text-main-light dark:text-text-main-dark text-xl font-bold leading-tight">
                  Drag and drop your image here
                </p>
                <p className="text-text-sub-light dark:text-text-sub-dark text-sm">
                  Supports JPG, PNG up to 5MB
                </p>
              </div>
              <button className="mt-2 flex items-center justify-center rounded-lg h-10 px-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary text-text-main-light dark:text-text-main-dark text-sm font-bold shadow-sm transition-all">
                Browse Files
              </button>
              <input accept="image/png, image/jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary hover:bg-primary-dark text-white text-lg font-bold tracking-wide shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                <span className="material-symbols-outlined">analytics</span>
                Analyze Waste
              </button>
              <div className="flex items-start justify-center gap-2 mt-2">
                <span className="material-symbols-outlined text-gray-400 text-sm mt-0.5">info</span>
                <p className="text-center text-xs text-text-sub-light dark:text-text-sub-dark max-w-md">
                  Note: Image is processed by AI models for waste detection and classification. No personal data is stored permanently.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 opacity-70">
            <div className="flex flex-col items-center gap-2 text-center p-4">
              <span className="material-symbols-outlined text-primary text-2xl">speed</span>
              <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">Fast Processing</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4">
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">99% Accuracy</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center p-4">
              <span className="material-symbols-outlined text-primary text-2xl">lock</span>
              <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">Secure & Private</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;