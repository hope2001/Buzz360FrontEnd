import React from 'react';

const SupportSection = () => {
  return (
    <section id="support" className="scroll-mt-17">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark pt-25 px-4 sm:px-20 lg:px-27.5">
          {/* Background Grid */}
          <div className="flex justify-center gap-7.5 absolute left-1/2 -translate-x-1/2 -top-[16%] max-w-[690px] w-full -z-1 opacity-40">
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-12" />
            {/* Other grid elements go here */}
          </div>

          {/* Stars Background */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div className="stars" />
            <div className="stars2" />
          </div>

          {/* Blur Background */}
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
            <span className="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
              <img src="images/blur-19.svg" alt="blur" className="max-w-none" />
            </span>
            {/* Other blur images go here */}
          </div>

          {/* Support Content */}
          <div className="wow fadeInUp mb-16 text-center relative z-999">
            <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
              <img src="images/icon-title.svg" alt="icon" />
              <span className="hero-subtitle-text"> Need Any Help? </span>
            </span>
            <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              Contact With Us
            </h2>
            <p className="max-w-[714px] mx-auto font-medium">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>

          {/* Contact Form */}
          <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
            <form className="relative z-10">
              <div className="-mx-4 xl:-mx-10 flex flex-wrap">
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label htmlFor="name" className="text-white mb-2.5 block font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label htmlFor="email" className="text-white mb-2.5 block font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="mb-10">
                    <label htmlFor="message" className="text-white mb-2.5 block font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      rows="6"
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-5 px-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <a
                      href="#"
                      className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
