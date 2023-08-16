import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';

const NavBar = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathname = usePathname()
  const handleScroll = () => {
    setStickyMenu(window.scrollY > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const item = [
    {title:"Accueil", path: "/"},
    {title:"Services", path: "/services"},
    {title:"Tarifs", path: "/prices"},
    {title:"Affiliés", path: "/affiliates"},
    {title:"Docs", path: "/docs"},
    {title:"Faq", path: "/faq"},
    {title:"Agents", path: "/agents"},
  ]

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 ${
        stickyMenu
          ? 'bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border'
          : ''
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl">
            {/* <img src="images/logo.svg" alt="Logo" /> */}
            DBerry
          </Link>

          <button
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="du-block absolute right-0 w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 ${
                    !navigationOpen ? '!w-full delay-300' : ''
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? '!w-full delay-400' : ''
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? '!w-full delay-500' : ''
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 w-full h-full rotate-45">
                <span
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                    !navigationOpen ? '!h-0 delay-[0]' : ''
                  }`}
                ></span>
                <span
                  className={`block bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                    !navigationOpen ? '!h-0 dealy-200' : ''
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>
        <div
          className={`w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen
              ? '!visible bg-dark shadow-lgrelative !h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5'
              : ''
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2">
             {item?.map((item, index)=>(
                <li className={`nav__menu lg:py-7 ${stickyMenu ? 'lg:!py-4' : ''}`}>
                <Link
                  href={item.path}
                  className={`relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient ${
                    pathname === item.path ? '!text-white nav-gradient' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
             )) }
            </ul>
          </nav>
          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <a href="/signin" className="text-white text-sm hover:text-opacity-75">
              Connection
            </a>
            <Link
              href="signup"
              className="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
            >
              Inscription
              <svg className="mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
