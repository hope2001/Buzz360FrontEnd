import Link from 'next/link';
import React from 'react';
import LoadingP from '../partials/loadingpage';

const Banner = () => {
  return (<>
  {/* <LoadingP/> */}
    <section id="home" className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45">
      <div className="max-w-7xl mx-auto">
        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
          <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
          <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img src="images/blur-02.svg" alt="blur" className="max-w-none" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img src="images/blur-01.svg" alt="blur" className="max-w-none" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center y-gap-3">
          {/* <Link
            href="/#"
            className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
          >
            <img src="images/icon-title.svg" alt="icon" />
            <span className="hero-subtitle-text">Your Ultimate Creative Companion!</span>
          </Link> */}
          <h1 className="text-white mb-6 text-5xl font-extrabold sm:text-5xl xl:text-heading-1">
            <span className="mx-1 text-purple-400">Chatbot</span> sur vos données d'entreprise.
          </h1>
          <p style={{fontSize:"22px"}} className="text-white my-5 max-w-[700px] mx-auto mb-9 font-medium md:text-lg text-lg">
            Avec notre <span className="text-purple-400">plateforme no-code</span> , vous pouvez créer votre propre <span className="text-purple-400">chatbot personnalisé IA</span>  sur vos propres données en quelques secondes.  Aucun codage requis!</p>
          <Link
            href="/signup" style={{fontSize:"19px", fontWeight:"bold"}}
            className=" hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
          >
            Commencer maintenant
          </Link>
          <Link
            href="/agents" style={{fontSize:"19px", fontWeight:"bold"}}
            className="hero-button-gradien mx-2 bg-purple-200 hover:bg-purple-600 inline-flex rounded-lg py-3 px-7 text-black font-medium ease-in duration-300 hover:opacity-80"
          >
            Planifier un rendez-vous
          </Link>
        </div>
      </div>
      <div className="mt-17" data-wow-delay="0.1s">
        <img className="mx-auto" src="images/hero.svg" alt="hero" />
      </div>
    </section></>
  );
};

export default Banner;
