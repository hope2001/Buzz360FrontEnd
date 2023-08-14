import React, { useState } from 'react';

const TestimonialSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  const handleScroll = () => {
    setScrollContent(window.scrollY > 500);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45 pb-20">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="wow fadeInUp mb-15 text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="images/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">Wall of love</span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            What Our Users Say
          </h2>
          <p className="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient, accurate, and enjoyable.
          </p>
        </div>
        <div onScroll={handleScroll} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 ${showContent ? '' : 'max-h-[855px] overflow-hidden'}`}>
          {/* User testimonial cards */}
          {/* Card 1 */}
          <div className="space-y-7.5">
            {/* Content here */}
          </div>

          {/* Card 2 */}
          <div className="space-y-7.5">
            {/* Content here */}
          </div>

          {/* Card 3 */}
          <div className="space-y-7.5">
            {/* Content here */}
          </div>
        </div>

        {/* Show more button */}
        <div className={`absolute inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-dark pt-32 pb-8 pointer-events-none ${scrollContent ? '!opacity-100' : ''}`}>
          <button
            onClick={toggleContent}
            type="button"
            className={`button-border-gradient hover:button-gradient-hover relative top-20 text-sm text-white font-semibold px-4.5 py-3 rounded-lg pointer-events-auto flex mx-auto -mt-7.5 ease-in duration-300 ${showContent ? 'transition-transform translate-y-4' : ''} ${scrollContent ? 'translate-y-0' : ''}`}
          >
            <span>{showContent ? 'Okay, I get the point' : 'Show more...'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
