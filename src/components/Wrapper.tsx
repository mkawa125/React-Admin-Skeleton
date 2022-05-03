import React, { Component, useEffect, useState } from "react";
import  SideNavBar  from "./SideBar";
import Nav from "./Nav";
import axios from "axios";
import  {Navigate}  from "react-router-dom";

const Wrapper  = (props: any) => {

    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        (
           async () => {
               try {

                    const {data} = await axios.get('user');
                    console.log(data)

               } catch (error) {
                    setRedirect(true)
               }
           }
        )();
    }, []);

    if (redirect) {
        return <Navigate to="/login"/>
    }
        return (
            <>
               <SideNavBar/>
                <Nav/>
                <section className='pt-24 bg-gray-100 w-full p-20'>
                    {props.children}
                </section>
            </>
        )
}

export default Wrapper