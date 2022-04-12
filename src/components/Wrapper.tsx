import React, { Component } from "react";
import  SideNavBar  from "./SideBar";
import Nav from "./Nav";

class Wrapper extends Component{

    render(){
        return (
            <>
               <SideNavBar/>
                <Nav/>
                <section className='pt-24 bg-gray-100 w-full p-20'>
                    {this.props.children}
                </section>
            </>
        )
    }
}

export default Wrapper