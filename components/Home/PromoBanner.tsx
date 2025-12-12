import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-orange-600 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
          <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Davantech Care+</h2>
              <p className="text-orange-100 max-w-lg text-lg">
                Protect your investment with accidental damage coverage, battery service, and priority support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-700 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
