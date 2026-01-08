import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        
        {/* Header */}
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-12 md:py-20 lg:py-24" id="home">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-6 text-left max-w-2xl">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Academic Research Project V.1.0
                  </div>
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-main-light dark:text-text-main-dark sm:text-5xl lg:text-6xl">
                    Smart Waste <span className="text-primary">Detection</span> & <span className="text-primary">Guidance</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-text-sub-light dark:text-text-sub-dark sm:text-xl max-w-lg">
                    Revolutionizing waste management through computer vision. Our deep learning model identifies, classifies, and guides you towards the most sustainable disposal method.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <button onClick={() => navigate('/upload')} className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-green-500 hover:shadow-xl hover:-translate-y-0.5">
                      <span className="material-symbols-outlined text-[20px]">upload_file</span>
                      <span>Upload Waste Image</span>
                    </button>
                  </div>
                </div>
                
                {/* Hero Image / Interactive Area */}
                <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10"></div>
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    data-alt="Close up of a green plant sprout representing sustainability and growth" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB28yD8O34CPj4bofnJsliUB7TgAkvD2oDJdCSTAZtV1eWSBL57HMP4fO1Y6QIhZNb0GRAzl9JZyCFFbA80s_VM73B_mTdm3SqB_gbIJFHMKOD-aCbTjhIou_xERPcb4uyJB29yTOe5vJnfo6kSgmhI8VIUKFXed5m-YLMijxk0bG8PfzU3fupB4yCqmimmXnicPX0oU9eMlcxfGrWHLoH_gkbgxt8EL33RqeU8BAFLBW4SFK-WCsUKfhxx3yLes-iFG7R9m8lFuFW0")' }}
                  >
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl bg-surface-light/90 dark:bg-surface-dark/90 p-4 backdrop-blur-sm border border-border-light dark:border-border-dark shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">auto_awesome</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main-light dark:text-text-main-dark">AI Detection Active</p>
                        <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Processing realtime classification...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-10 bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center gap-1 text-center sm:items-start sm:text-left">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Accuracy</span>
                  </div>
                  <p className="text-4xl font-bold text-text-main-light dark:text-text-main-dark">98%</p>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Model Precision Rate</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 text-center sm:items-start sm:text-left">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <span className="material-symbols-outlined">category</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Capabilities</span>
                  </div>
                  <p className="text-4xl font-bold text-text-main-light dark:text-text-main-dark">50+</p>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Waste Classes Identified</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 text-center sm:items-start sm:text-left">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <span className="material-symbols-outlined">school</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Origin</span>
                  </div>
                  <p className="text-4xl font-bold text-text-main-light dark:text-text-main-dark">Academic</p>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark">University Research Project</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="py-16 md:py-24" id="workflow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col gap-4 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark sm:text-4xl">How It Works</h2>
                <p className="max-w-2xl text-lg text-text-sub-light dark:text-text-sub-dark">
                  Our system uses advanced deep learning to simplify waste management into three simple steps, making sustainability accessible to everyone.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Step 1 */}
                <div className="group relative flex flex-col gap-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">photo_camera</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">1. Snap a Photo</h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                      Capture an image of your waste item using your webcam or upload a file directly to our secure server.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="group relative flex flex-col gap-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">2. AI Analysis</h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                      Our neural network instantly processes the image, identifying material composition and potential contaminants.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="group relative flex flex-col gap-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:border-primary/50">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">recycling</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">3. Sustainable Advice</h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                      Receive immediate, eco-friendly disposal instructions based on local recycling guidelines and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-16 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark" id="tech-stack">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col gap-4 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark sm:text-4xl">Technology Stack</h2>
                <p className="max-w-2xl text-lg text-text-sub-light dark:text-text-sub-dark">
                  Built on robust, open-source technologies to ensure scalability, accuracy, and performance in waste detection.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center transition-all hover:border-primary/50">
                  <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
                  <h3 className="font-bold text-text-main-light dark:text-text-main-dark">Python</h3>
                  <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Core Logic</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center transition-all hover:border-primary/50">
                  <span className="material-symbols-outlined text-4xl text-primary">view_in_ar</span>
                  <h3 className="font-bold text-text-main-light dark:text-text-main-dark">Roboflow</h3>
                  <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Computer Vision</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center transition-all hover:border-primary/50">
                  <span className="material-symbols-outlined text-4xl text-primary">code</span>
                  <h3 className="font-bold text-text-main-light dark:text-text-main-dark">React</h3>
                  <p className="text-xs text-text-sub-light dark:text-text-sub-dark">User Interface</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center transition-all hover:border-primary/50">
                  <span className="material-symbols-outlined text-4xl text-primary">cloud_queue</span>
                  <h3 className="font-bold text-text-main-light dark:text-text-main-dark">Cloud API</h3>
                  <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Processing</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Homepage;
