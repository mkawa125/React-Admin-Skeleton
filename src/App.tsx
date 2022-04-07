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
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <main className="flex-row flex-wrap flex-grow">
                    <div className="flex flex-col md:flex-row">
                        <SideNavBar></SideNavBar>
                        <section>
                            <Routes>
                                <Route path={"/"} element={<Dashboard/>} />
                                <Route path="users" element={<User/>} />
                                <Route path="orders" element={<Order/>} />
                            </Routes>
                        </section>
                    </div>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
