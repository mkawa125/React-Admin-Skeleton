import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SideNavBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './modules/users/Users';
import Order from './modules/orders/Orders';

function App() {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <BrowserRouter>
                <SideNavBar/>
                <Nav/>
                <section className='pt-24 bg-gray-100 w-full p-20'>
                    <Routes>
                        <Route path={"/"} element={<Dashboard/>} />
                        <Route path="users" element={<User/>} />
                        <Route path="orders" element={<Order/>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}

export default App;
