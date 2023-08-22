import React from 'react';

const Pricing = () => {
    const price = [1,2,3]
  return (
    <section id="pricing" className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

        {/* Background elements */}
        <div className="relative top-18">
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
            <div className="absolute left-1/2 -translate-x-1/2 top-0">
              <img src="images/blur-13.svg" alt="blur" className="max-w-none" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0">
              <img src="images/blur-14.svg" alt="blur" className="max-w-none" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0">
              <img src="images/blur-15.svg" alt="blur" className="max-w-none" />
            </div>
          </div>
          <div className="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle">
          </div>
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex justify-center gap-7.5 relative -z-1">
          {/* Pricing grid */}
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
        </div>

        {/* Pricing plan heading */}
        <div className="wow fadeInUp mb-17.5 -mt-24 text-center z-10 relative">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="images/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text"> Get access </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Our Pricing Plan
          </h2>
          <p className="max-w-[714px] mx-auto font-medium">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>

        {/* Pricing plan items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {/* Starter plan */}
          {price?.map((item, index)=> <div key={index} className="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
            <span className="absolute right-9 top-9"><img src="images/pricing-icon-01.svg" alt="icon" /></span>
            <h3 className="font-semibold text-heading-6 text-white mb-5.5">
              Starter
            </h3>
            <div className="flex items-center gap-3.5">
              <h2 className="font-bold text-custom-1 pricing-gradient-text">
                $10
              </h2>
              <p className="font-medium">
                /month <br />
                (billed annually)
              </p>
            </div>
            <div className="my-10 w-full h-[1px] pricing-gradient-divider"></div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-5">
                <img src="images/pricing-icon-04.svg" alt="icon" />
                <span className="font-medium">Subscription with levels</span>
              </li>
              {/* Add other list items */}
            </ul>
            <a href="/#" className="mt-11 flex items-center justify-center gap-1.5 font-medium text-white p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button">
              Get the plan
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z" fill="white" />
              </svg>
            </a>
            <p className="mt-4 text-sm text-center">
              No extra hidden charge
            </p>
            <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
              <span className="absolute left-0 bottom-0 -z-1">
                <img src="images/blur-16.svg" alt="blur" className="max-w-none" />
              </span>
              <span className="absolute left-0 top-0 -z-1">
                <img src="images/blur-17.svg" alt="blur" className="max-w-none" />
              </span>
            </div>
          </div>)}

          {/* Medium plan */}
          {/* <div className="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border"> */}
            {/* Rest of the code for the Medium plan */}
          {/* </div> */}

          {/* Business plan */}
          {/* <div className="wow fadeInUp rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border"> */}
            {/* Rest of the code for the Business plan */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
