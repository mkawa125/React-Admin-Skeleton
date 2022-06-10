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
import Products from './modules/products/Products';
import Login from './modules/Auth/Login';
import CreateUser from './modules/users/forms/createUser';
import EditUser from './modules/users/forms/editUser';
import Roles from './modules/roles_and_permissions/roles';
import CreateRole from './modules/roles_and_permissions/forms/createRole';
import EditRole from './modules/roles_and_permissions/forms/editRole';
import CreateProduct from './modules/products/forms/createProduct';
import EditProduct from './modules/products/forms/editProduct';
import Profile from './modules/users/Profile';
import AuthenticatedRoutes from './modules/Auth/protectedRoutes';
import ForgetPassword from './modules/Auth/ForgetPassword';
import ResetPassword from './modules/Auth/ResetPassword';

function App() {

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<AuthenticatedRoutes/>}> */}
                        <Route path={"/"} element={<Dashboard/>} />
                        <Route path="users"  element={<User/>} />
                        <Route path="profile"  element={<Profile/>} />

                        <Route path="roles"  element={<Roles/>} />
                        <Route path="roles/create"  element={<CreateRole/>} />
                        <Route path="roles/:id/edit"  element={<EditRole/>} />

                        <Route path="orders" element={<Order/>} />
                        <Route path="register" element={<Register/>} />

                        <Route path="products" element={<Products/>} />
                        <Route path="products/create" element={<CreateProduct/>} />
                        <Route path="products/:id/edit" element={<EditProduct/>} />

                        <Route path="users/create" element={<CreateUser/>} />
                        <Route path="users/:id/edit" element={<EditUser/>} />
                        <Route path="reset-password/:token/reset" element={<ResetPassword/>} />

                    {/* </Route> */}
                    
                    <Route path="login" element={<Login/>} />
                    <Route path="forget-password" element={<ForgetPassword/>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
