import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [results, setResults] = useState(null);

  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload an image file (JPG, PNG)');
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
      setResults(null);
      setErrorMsg('');
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const detectWaste = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setResults(null);
    setErrorMsg('');

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/detect', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.error || 'Detection failed');
        setLoading(false);
        return;
      }

      setResults(data);
    } catch (err) {
      setErrorMsg('Failed to connect to server: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 flex flex-col items-center py-10 px-6 relative overflow-visible">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-400 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-8 relative z-0">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-main-light dark:text-text-main-dark">
              Waste <span className="text-primary">Mate</span>
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark text-lg font-normal">
              AI-Powered Waste Detection & Recycling Guide
            </p>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-border-light dark:border-border-dark p-8">

            {/* Upload Area */}
            {!previewUrl && (
              <div
                className={`group relative flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed transition-all duration-300 px-6 py-16 cursor-pointer ${isDragOver ? 'border-primary bg-primary/5' : 'border-primary/30 hover:border-primary bg-background-light dark:bg-background-dark/50'}`}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center z-10">
                  <p className="text-text-main-light dark:text-text-main-dark text-xl font-bold leading-tight">
                    Upload Waste Image
                  </p>
                  <p className="text-text-sub-light dark:text-text-sub-dark text-sm">
                    Drag & drop or click to upload an image (JPG, PNG)
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  accept="image/png, image/jpeg"
                  className="hidden"
                  type="file"
                  onChange={onFileChange}
                />
              </div>
            )}

            {/* Preview Box */}
            {previewUrl && !results && !loading && (
              <div className="flex flex-col items-center gap-6">
                <div className="relative rounded-xl overflow-hidden border-2 border-border-light dark:border-gray-700 bg-black/10">
                  <img src={previewUrl} alt="Preview" className="max-h-80 object-contain" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setPreviewUrl(null); setSelectedFile(null); }}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
                <button
                  onClick={detectWaste}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Detect Waste
                </button>
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                <p className="text-text-sub-light dark:text-text-sub-dark font-medium">Analyzing image for waste objects...</p>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-center">
                {errorMsg}
                <button className="ml-4 underline text-sm" onClick={() => setErrorMsg('')}>Dismiss</button>
              </div>
            )}

            {/* Results Section */}
            {results && (
              <div className="mt-8 space-y-8 animate-fade-in">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-primary">{results.total_objects}</div>
                    <div className="text-sm text-text-sub-light dark:text-text-sub-dark mt-2 font-medium uppercase tracking-wider">Objects Detected</div>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-primary">{results.unique_waste_types}</div>
                    <div className="text-sm text-text-sub-light dark:text-text-sub-dark mt-2 font-medium uppercase tracking-wider">Waste Types</div>
                  </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-background-light dark:bg-background-dark">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-border-light dark:border-border-dark font-semibold text-text-main-light dark:text-text-main-dark">
                      Original Image
                    </div>
                    <img src={results.original_image} alt="Original" className="w-full object-contain bg-black/5" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-background-light dark:bg-background-dark">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-border-light dark:border-border-dark font-semibold text-text-main-light dark:text-text-main-dark">
                      Detected Waste
                    </div>
                    <img src={results.annotated_image} alt="Annotated" className="w-full object-contain bg-black/5" />
                  </div>
                </div>

                {/* Detections List */}
                <div className="rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm bg-background-light dark:bg-background-dark">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-border-light dark:border-border-dark font-semibold text-text-main-light dark:text-text-main-dark">
                    Detected Objects
                  </div>
                  <div className="p-4 space-y-2">
                    {results.detections.length === 0 ? (
                      <p className="text-center text-text-sub-light dark:text-text-sub-dark py-4">No waste objects detected. Try a different image.</p>
                    ) : (
                      results.detections.map((det, i) => (
                        <div key={i} className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border-l-4 border-l-primary">
                          <span className="font-semibold text-text-main-light dark:text-text-main-dark">{det.class}</span>
                          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            {det.confidence}%
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Suggestions */}
                {results.suggestions && results.suggestions.length > 0 && (
                  <div className="pt-4 space-y-6">
                    <h2 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark border-b border-border-light dark:border-border-dark pb-2">
                      Recycling Suggestions
                    </h2>
                    <div className="space-y-4">
                      {results.suggestions.map((sug, i) => (
                        <div key={i} className="rounded-xl border border-border-light dark:border-border-dark p-6 bg-background-light dark:bg-background-dark shadow-sm">
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <span className="text-xl font-bold text-text-main-light dark:text-text-main-dark">{sug.waste_type}</span>
                            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border ${sug.recyclable ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' : 'bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'}`}>
                              {sug.recyclable ? 'Recyclable' : 'Non-Recyclable'}
                            </span>
                          </div>

                          <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-4 py-3 rounded-lg font-semibold mb-4 text-sm border border-blue-100 dark:border-blue-800/50">
                            {sug.bin}
                          </div>

                          <ul className="space-y-2">
                            {sug.tips.map((tip, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-text-sub-light dark:text-text-sub-dark">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center pt-6 pb-2">
                  <button
                    onClick={() => { setResults(null); setPreviewUrl(null); setSelectedFile(null); }}
                    className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-bold transition-colors"
                  >
                    Analyze Another Image
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;