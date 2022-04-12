import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SideNavBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './modules/users/Users';
import Order from './modules/orders/Orders';
import Register from './modules/Auth/Register';
import Product from './modules/products/Products';
import Login from './modules/Auth/Login';

function App() {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Dashboard/>} />
                    <Route path="users" element={<User/>} />
                    <Route path="orders" element={<Order/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="products" element={<Product/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
