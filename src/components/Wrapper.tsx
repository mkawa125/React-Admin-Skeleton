import React, { Component, Dispatch, useEffect, useState } from "react";
import  SideNavBar  from "./SideBar";
import Nav from "./Nav";
import axios from "axios";
import  {Navigate}  from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../modules/users/userModel";
import { setUser } from "../redux/actions/setUserAction";

const Wrapper  = (props: any) => {

    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        (
           async () => {
               try {
                    const {data} = await axios.get('user');
                    props.setUser(new User(
                        data.user.id, 
                        data.user.first_name, 
                        data.user.last_name, 
                        data.user.email,
                        data.user.uuid,
                        data.user.role,
                       )   
                    );

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
                <section className='pt-24 bg-gray-100 w-full p-20 overflow-y-auto'>
                    {props.children}
                </section>
            </>
        )
}

const mapStateToProps = (state: {user: User}) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Wrapper)