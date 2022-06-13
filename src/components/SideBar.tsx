import axios from "axios";
import { Sidebar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const SideBar = () => {

    const activeClasses = "inline-flex py-3 border-l-4 border-blue-800  px-6 bg-gray-400 items-center w-full text-sm transition-colors duration-150 text-blue-900 hover:text-blue-700 dark:hover:text-gray-200";
    const inActiveClasses = "inline-flex py-3 px-6 items-center w-full text-sm transition-colors duration-150 hover:text-blue-700 dark:hover:text-gray-200";

    const logout = async () => {
        await axios.post("logout", {});
    }
    return (

        // <div className="w-fit bg-gray-300 mt-8">
        //     <Sidebar aria-label="Sidebar with multi-level dropdown example" className="flex flex-col h-screen hidden w-64 overflow-y-auto bg-gray-300  border dark:bg-gray-800 md:block flex-shrink-0">
        //         <Sidebar.Items>
        //         <Sidebar.ItemGroup>
        //             <Sidebar.Item className="px-0">
        //             <NavLink className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)} to={'/'}>
        //                     <i className="fa fa-home"></i>
        //                         <span className="ml-0">Dashboard</span>
        //                     </NavLink>            
        //          </Sidebar.Item>
        //             <Sidebar.Collapse
        //             label="E-commerce"
        //             >
        //             <Sidebar.Item href="#">
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>
        //             </Sidebar.Item>
        //             </Sidebar.Collapse>
        //             <Sidebar.Item
        //             href="#"
        //             >
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //             href="#"
        //             >
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //             href="#"
        //             >
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>
        //             </Sidebar.Item>
        //             <Sidebar.Item
        //             href="#"
        //             >
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>                    
        //                  </Sidebar.Item>
        //             <Sidebar.Item
        //             href="#"
        //             >
        //             <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
        //                  <i className="fa fa-list"></i>
        //                      <span className="ml-4">Products </span>
        //                  </NavLink>                    
        //             </Sidebar.Item>
        //         </Sidebar.ItemGroup>
        //         </Sidebar.Items>
        //     </Sidebar>
        // </div>

            <aside className="flex flex-col h-screen hidden w-64 overflow-y-auto bg-gray-300  border dark:bg-gray-800 md:block flex-shrink-0" aria-label="Sidebar">
                <div className="py-4 text-gray-900 dark:text-gray-400">
                    <Link className="ml-6 text-lg font-bold text-gray-600 dark:text-gray-200" to={'/'}>
                        React Admin Skeleton
                    </Link>

                    <ul className="mt-6">
                        <li className="relative">
                            <NavLink className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)} to={'/'}>
                            <i className="fa fa-home"></i>
                                <span className="ml-4">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>


                    <ul>
                        

                        <li className="relative">
                                <NavLink className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)} to="/users" >
                                    <i className="fa fa-users"></i> 
                                    <span className="ml-4">Users Management</span>
                                </NavLink>
                            </li>

                        <li className="relative">
                            <NavLink to={"/roles"} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                                <i className="fa fa-user-secret"></i>
                                <span className="ml-4">Roles & Permissions</span>
                            </NavLink>
                        </li>
                        
                        <li className="relative">
                            <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                            <i className="fa fa-list"></i>
                                <span className="ml-4">Products </span>
                            </NavLink>
                        </li>

                        <li className="relative">
                            <NavLink to={"/orders"} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                               <i className="fa fa-shopping-cart"></i>
                                <span className="ml-4">Orders</span>
                            </NavLink>
                        </li>

                        <li>
                        <button className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                               <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                               <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                              <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           </button>
                       <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                 <li>
                                    <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                                        <i className="fa fa-list"></i>
                                        <span className="ml-4">Products </span>
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                                        <i className="fa fa-list"></i>
                                        <span className="ml-4">Products </span>
                                    </NavLink>                                 </li>
                                 <li>
                                    <NavLink to={'/products'} className={({ isActive }) => (isActive ? activeClasses : inActiveClasses)}>
                                        <i className="fa fa-list"></i>
                                        <span className="ml-4">Products </span>
                                    </NavLink>                                 
                                </li>
                             </ul>
                         </li>
                    </ul>

                    

                    <div className="px-4 my-6 items-center absolute bottom-96 w-64">
                        <NavLink to={'/login'} onClick={logout} className="items-center">
                            <button className=" items-center text-center font-semibold justify-between w-full px-4 py-3 text-sm font-medium  text-white  bg-blue-900  rounded  hover:bg-blue-800">
                                Logout  <i className="fa fa-sign-out-alt text-white mx-1"></i>
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