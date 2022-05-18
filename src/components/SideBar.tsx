import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {

    const logout = async () => {
        await axios.post("logout", {});
    }
    return (
            <aside className="z-20 flex flex-col h-screen hidden w-64 overflow-y-auto bg-gray-300  border dark:bg-gray-800 md:block flex-shrink-0">
                <div className="py-4 text-gray-900 dark:text-gray-400">
                    <Link className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to={'/'}>
                        React Admin Skeleton
                    </Link>

                    <ul className="mt-6">
                        <li className="relative px-6 py-3 bg-gray-400">
                            <span className="absolute inset-y-0 left-0 w-1 bg-blue-900 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                            <NavLink className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" to={'/'}>
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                    </path>
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>


                    <ul>
                        <li className="relative px-6 py-3">
                            <NavLink className="inline-flex items-center w-full text-sm transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to={'/users'}>
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                    </path>
                                </svg>
                                <span className="ml-4">Users Management</span>
                            </NavLink>
                        </li>


                        {/* <li className="relative px-6 py-3">
                            <NavLink to={"/orders"} className="inline-flex items-center w-full text-sm transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <span className="ml-4">Orders</span>
                            </NavLink>
                        </li> */}

                        <li className="relative px-6 py-3">
                            <NavLink to={"/roles"} className="inline-flex items-center w-full text-sm  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                    </path>
                                </svg>
                                <span className="ml-4">Roles & Permissions</span>
                            </NavLink>
                        </li>



                        <li className="relative px-6 py-3">
                            <NavLink to={'/products'} className="inline-flex items-center w-full text-sm transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                    </path>
                                </svg>
                                <span className="ml-4">Products </span>
                            </NavLink>
                        </li>

                        <template x-if="isPagesMenuOpen">
                            <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                                aria-label="submenu">

                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/login.html">Login</a>
                                </li>

                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/create-account.html">
                                        Create account
                                    </a>
                                </li>

                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/forgot-password.html">
                                        Forgot password
                                    </a>
                                </li>


                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/404.html">404</a>
                                </li>

                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="pages/blank.html">Blank</a>
                                </li>

                            </ul>
                        </template>
                    </ul>

                    <div className="px-6 my-6">
                        <NavLink to={'/login'} onClick={logout}>
                            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-900 border border-transparent rounded active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                                Logout 
                            </button>
                        </NavLink>
                    </div>
                </div>
            </aside>


            // <main className="flex flex-col h-screen">
            //     <div className="flex flex-1 overflow-hidden">
            //         <div className="flex bg-gray-500 w-32 p-4">Sidebar</div>
            //         <div className="flex flex-1 flex-col">
            //         <div className="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
            //             Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
            //         </div>
            //         </div>
            //     </div>
            //     <div className="flex">Footer</div>
            // </main>
    )
}

export default SideBar;