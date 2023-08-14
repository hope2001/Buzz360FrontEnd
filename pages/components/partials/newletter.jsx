import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="pt-17.5 sm:pt-22.5 xl:pt-27.5 pb-11">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-[352px] w-full">
            <h3 className="font-semibold text-heading-5 text-white mb-2">
              News & Update
            </h3>
            <p className="font-medium">
              Keep up to date with everything about our tool
            </p>
          </div>
          <div className="max-w-[534px] w-full">
            <form>
              <div className="flex items-center gap-4">
                <div className="max-w-[395px] w-full">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none"
                  />
                </div>
                <a
                  href="/#"
                  className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-3.5 px-7 shadow-button hover:button-gradient-hover hover:shadow-none"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
