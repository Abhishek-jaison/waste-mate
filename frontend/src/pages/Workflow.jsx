import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Workflow = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        {/* Title Section */}
        <section className="w-full max-w-[960px] px-4 pt-16 pb-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Pipeline
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
              How WasteMate Works
            </h1>
            <p className="text-lg md:text-xl text-text-sub-light dark:text-text-sub-dark max-w-2xl leading-relaxed">
              From raw image capture to actionable eco-guidance: A transparent look at our academic AI pipeline leveraging YOLOv8 object detection and EfficientNet-B0 classification.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="w-full max-w-[1280px] px-4 py-12">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border-light dark:bg-border-dark -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {/* Step 1 */}
              <div className="group flex flex-col gap-4">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-light dark:bg-surface-dark border-2 border-primary shadow-lg lg:group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl">add_a_photo</span>
                  </div>
                  <div className="absolute -top-3 left-[calc(50%-0.75rem)] lg:left-12 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-background-dark">1</div>
                </div>
                <div className="text-center lg:text-left bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-4 rounded-xl border border-border-light dark:border-border-dark lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-1">Image Input</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-snug">
                    User captures or uploads a raw waste image to the platform via web or mobile interface.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center text-gray-300 dark:text-gray-700">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex flex-col gap-4">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm lg:group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-primary/50">
                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-200 text-3xl">center_focus_strong</span>
                  </div>
                  <div className="absolute -top-3 left-[calc(50%-0.75rem)] lg:left-12 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-background-dark transition-colors">2</div>
                </div>
                <div className="text-center lg:text-left bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-4 rounded-xl border border-border-light dark:border-border-dark lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-1">Object Detection</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-snug">
                    <strong className="text-primary font-semibold">YOLOv8</strong> scans the scene to localize multiple waste objects with bounding boxes.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center text-gray-300 dark:text-gray-700">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex flex-col gap-4">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm lg:group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-primary/50">
                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-200 text-3xl">psychology</span>
                  </div>
                  <div className="absolute -top-3 left-[calc(50%-0.75rem)] lg:left-12 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-background-dark transition-colors">3</div>
                </div>
                <div className="text-center lg:text-left bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-4 rounded-xl border border-border-light dark:border-border-dark lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-1">Classification</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-snug">
                    <strong className="text-primary font-semibold">EfficientNet-B0</strong> analyzes cropped objects to determine specific material types.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center text-gray-300 dark:text-gray-700">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group flex flex-col gap-4">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm lg:group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-primary/50">
                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-200 text-3xl">alt_route</span>
                  </div>
                  <div className="absolute -top-3 left-[calc(50%-0.75rem)] lg:left-12 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-background-dark transition-colors">4</div>
                </div>
                <div className="text-center lg:text-left bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-4 rounded-xl border border-border-light dark:border-border-dark lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-1">Categorization</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-snug">
                    System logic branches to identify if the source is Municipal or Agricultural waste.
                  </p>
                </div>
                <div className="lg:hidden flex justify-center text-gray-300 dark:text-gray-700">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="group flex flex-col gap-4">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-background-dark shadow-lg shadow-primary/30 lg:group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <div className="absolute -top-3 left-[calc(50%-0.75rem)] lg:left-12 flex h-6 w-6 items-center justify-center rounded-full bg-background-dark border border-primary text-xs font-bold text-primary">5</div>
                </div>
                <div className="text-center lg:text-left bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm p-4 rounded-xl border border-border-light dark:border-border-dark lg:bg-transparent lg:dark:bg-transparent lg:border-none lg:p-0">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-1">Actionable Output</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-snug">
                    Generates specific reuse, composting, or hazard disposal guidance for the user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="w-full max-w-[960px] px-4 py-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-border-light dark:border-border-dark flex flex-col gap-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">view_in_ar</span>
              </div>
              <h4 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Why YOLOv8?</h4>
              <p className="text-text-sub-light dark:text-text-sub-dark">
                We chose the "You Only Look Once" (v8) architecture for its real-time processing speed and high accuracy in cluttered environments, essential for mixed-waste scenarios.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-border-light dark:border-border-dark flex flex-col gap-4">
              <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">memory</span>
              </div>
              <h4 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Why EfficientNet?</h4>
              <p className="text-text-sub-light dark:text-text-sub-dark">
                EfficientNet-B0 provides an optimal balance between parameter count and accuracy, allowing our classification model to run efficiently even on edge devices with limited compute.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workflow;