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

            <SideNavBar/>
                <Nav/>

                
            </div>
    );
}

export default App;
