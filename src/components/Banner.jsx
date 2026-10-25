import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient from-blue-600 to-indigo-700 text-white text-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide uppercase">
          Secure Access. Simple Authentication.
        </h1>

        {/* Subtitle */}
        <p className="text-blue-500 max-w-xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Build validated forms with React and Tailwind CSS. A reusable input component handles your needs seamlessly.
        </p>

        {/* Action Button */}
        <button 
          type="button" 
          className="bg-white text-blue-700 font-semibold px-6 py-2.5 rounded-md text-sm hover:bg-slate-100 transition duration-200 shadow-md mt-6 cursor-pointer"
        >
          GET STARTED NOW
        </button>
      </div>
    </section>
  );
};

export default Banner;