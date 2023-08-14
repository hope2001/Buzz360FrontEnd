import React from 'react';

const Features = () => {
  return (
    <>
    <section id="features" className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
      <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="wow fadeInUp text-center">
          <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <img src="images/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text"> Some of Main Features </span>
          </span>
          <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
            Key Features of Our Tool
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 font-medium">
            Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>
        <div className="relative">
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
          <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

          <div className="flex flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-01.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Intelligent Writing Assistance</h4>
                <p className="font-medium">Our AI writing tool analyzes your content, suggests improvements,</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-02.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Grammar and Spell Check</h4>
                <p className="font-medium">Say goodbye to embarrassing typos and grammar mistakes</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-03.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Plagiarism Detection</h4>
                <p className="font-medium">Originality is key, and our AI writing tool helps you maintain it</p>
              </div>
            </div>
          </div>

          <div className="features-row-border w-full h-[1px]"></div>

          <div className="flex flex-wrap justify-center">
            {/* Feature 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-04.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Voice to Text Conversion</h4>
                <p className="font-medium">Transform your spoken words into written text easily & effortlessly</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-05.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Style and Tone Adaptation</h4>
                <p className="font-medium">Whether you need a professional, or positive tone it has everyone</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                  <img src="images/icon-06.svg" alt="icon" />
                </span>
                <h4 className="font-semibold text-lg text-white mb-4">Content Generation</h4>
                <p className="font-medium">Need inspiration or assistance with generating content?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="pt-12.5">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-7.5" data-highlighter>

          {/* Feature 1 */}
          <div className="sm:col-span-12">
            <div className="relative rounded-3xl features-box-border">
              <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                <div className="flex items-center justify-between relative z-20">
                  <div className="max-w-[477px] w-full">
                    <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                      <img src="images/icon-title.svg" alt="icon" />
                      <span className="hero-subtitle-text">
                        AI-Powered Writing Tool
                      </span>
                    </span>
                    <h3 className="text-white mb-4.5 font-bold text-heading-4">
                      Intelligent Writing Assistance
                    </h3>
                    <p className="font-medium mb-10">
                      Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process...
                    </p>
                    <a href="#" className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button">
                      Learn more
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                  <div className="max-w-[428px] w-full hidden sm:block">
                    <img src="images/big-icon.svg" alt="icon" />
                  </div>
                </div>

                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
                  <span className="absolute right-0 bottom-0"><img src="images/shape-01.png" alt="shape" /></span>
                  <span className="absolute left-0 top-0"><img src="images/shape-02.svg" alt="shape" /></span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                    <img src="images/blur-03.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                    <img src="images/blur-04.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0">
                    <img src="images/blur-05.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute right-0 top-0">
                    <img src="images/shape-03.svg" alt="shape" className="max-w-none" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="sm:col-span-7">
            <div className="relative rounded-3xl features-box-border">
              <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                <div className="relative z-20">
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                    <img src="images/icon-05.svg" alt="icon" />
                  </span>
                  <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                    Empowering Writing Excellence
                  </h3>
                  <p className="font-medium">
                    Our AI writing tool is designed to empower you with exceptional writing capabilities, making the writing process...
                  </p>
                </div>

                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                  <span className="absolute left-0 bottom-0">
                    <img src="images/blur-06.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute right-0 top-0">
                    <img src="images/blur-07.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute right-[16%] top-[16%]">
                    <img src="images/shape-04.svg" alt="shape" />
                  </span>
                  <span className="absolute left-0 bottom-0">
                    <img src="images/blur-08.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute left-0 bottom-0">
                    <img src="images/blur-09.svg" alt="blur" className="max-w-none" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="sm:col-span-5">
            <div className="relative rounded-3xl features-box-border">
              <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                <div className="relative z-20">
                  <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                    <img src="images/icon-07.svg" alt="icon" />
                  </span>
                  <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                    Grammar and Spell Check
                  </h3>
                  <p className="font-medium">
                    Our AI writing tool is designed to empower you with exceptional writing capabilities.
                  </p>
                </div>

                <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                  <span className="absolute right-[14%] top-[17%]">
                    <img src="images/shape-05.svg" alt="shape" />
                  </span>
                  <span className="absolute left-0 bottom-0">
                    <img src="images/blur-10.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute top-0 right-0">
                    <img src="images/blur-11.svg" alt="blur" className="max-w-none" />
                  </span>
                  <span className="absolute top-0 right-0">
                    <img src="images/blur-12.svg" alt="blur" className="max-w-none" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  );
};

export default Features;
