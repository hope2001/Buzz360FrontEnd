import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import IsAuth from "../authGard";
import { SidebarNav } from "./sidebarNav";
import { useFetchUserData } from "@/Services/Query/user";
import LoadingP from "../partials/loadingpage";
function DashLayout({ children }) {
    const router = useRouter()
    const pathname = usePathname()
    const [toggleNav, settoggleNav] = useState(false)
    const [toggleSidebar, settoggleSidebar] = useState(false)
    const {
        data: currenntuser,
        isLoading: isLoadingCurrentUser,
        error: errorCurrentUser, 
        refetch
    } = useFetchUserData();

    if(isLoadingCurrentUser && currenntuser)return <LoadingP/>
    if(!isLoadingCurrentUser &&!currenntuser){
        router.push('/')
    }
    return (

        <ChakraProvider>
            {/* {JSON.stringify(currenntuser)} */}
            <main className="relative h-screen overflow-auto bg-gray-100 dark:bg-gray-100 item-stretch container-fluid">
                <div className="flex justify-between">
                    {/* <Sidebar /> */}
                    <div className="flex flex-col w-full overflow-auto">
                        <header className="z-40 flex items-center justify-between w-full h-16 bg-gray-900">

                            <div className="w-full">
                                <nav className="bg-whit dark:bg-gray-10 shadow ">
                                    <div className="px-2 mx-auto max-w-7xl">

                                        <div className="flex items-center justify-between h-16">
                                            <div className=" flex items-center">
                                                <Link className="text-white text-2xl" href="/">Databoot.io</Link>
                                            </div>
                                            <div className="block">
                                                <div className="flex items-center ml-4 md:ml-6">
                                                    {/* <a href="http://github.com/Charlie85270/tail-kit" className="p-1 text-gray-400 rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">
                                View github
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792">
                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                </path>
                            </svg>
                        </a> */}
                                                    <div className="relative ml-3">
                                                        <div className="relative inline-block text-left">
                                                            <div>
                                                                <SidebarNav />
                                                                {/* <button type="button" className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                                    <svg width="20" fill="currentColor" height="20" className="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                                        </path>
                                                                    </svg>
                                                                </button> */}
                                                            </div>
                                                            <div className="hidden absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                                                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                    <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                                        <span className="flex flex-col">
                                                                            <span>
                                                                                Settings
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                                        <span className="flex flex-col">
                                                                            <span>
                                                                                Account
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                    <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                                        <span className="flex flex-col">
                                                                            <span>
                                                                                Logout
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="flex -mr-2 md:hidden">
                                                <button onClick={() => settoggleNav(!toggleNav)} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none ">
                                                    <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className={toggleNav ? " mt-50 hidden" : "hidden"}>
                                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                            <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                                                Accueil
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>


                        </header>

                        <div className="container-full h-full px-2 pb-1  md:px-6 bg-red-00 pt-12 ">
                            {/* <SidebarNav/> */}
                            <Breadcrumb className="" spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                                <BreadcrumbItem>
                                    {/* <BreadcrumbLink className="text-bold" href='/'>Accueil</BreadcrumbLink> */}
                                    <Link href="/"><i className=" cursor-pointer bi bi-house-check-fill"></i> </Link>

                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <span className="btn bg-gray-900 rounded px-2 py-1 text-white cursor-pointer">
                                        <BreadcrumbLink href=''>{pathname?.replace("/", " ")} </BreadcrumbLink>
                                    </span>

                                </BreadcrumbItem>

                            </Breadcrumb>
                            <div className=" my-4  flex flex-col items-stretch ">
                                {children}
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </ChakraProvider>
    );
}

// export default DashLayout;
export default IsAuth(DashLayout);