import Script from 'next/script';
import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      {/* Rest of the Footer content... */}
      <div className="max-w-[571px] w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <div>
            <h5 className="font-semibold text-white mb-5">Products</h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Changelog
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-5">Company</h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Refund Policy
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-5">Support</h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Changelog
                </a>
              </li>
              <li>
                <a to="#" className="font-medium ease-in duration-300 hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="hidden items-center justify-center w-10 h-10 rounded-[4px] shadow-solid-5 bg-purple hover:opacity-70 fixed bottom-8 right-8 z-999"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          className="fill-white w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </button>
    </footer>
{/* <Script src="bundle.js" /> */}
{/* <Script src="https://static.cloudflareinsights.com/beacon.min.js/v8b253dfea2ab4077af8c6f58422dfbfd1689876627854" integrity="sha512-bjgnUKX4azu3dLTVtie9u6TKqgx29RBwfj3QXYt5EKfWM/9hPSAI/4qcV5NACjwAo8UtTeWefx6Zq5PHcMm7Tg==" data-cf-beacon='{"rayId":"7f050fc8ac57b773","version":"2023.7.0","r":1,"token":"9a6015d415bb4773a0bff22543062d3b","si":100}' crossorigin="anonymous" /> */}
    </>
  );
};

export default Footer;
