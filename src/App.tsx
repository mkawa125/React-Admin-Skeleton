import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SideNavBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Nav/>
            <main>
                <div className="flex flex-col md:flex-row">
                    <SideNavBar></SideNavBar>
                    <section>
                        <div id="main" className="main-content flex-1 bg-white mt-12 md:mt-2 pb-24 p-10 md:pb-5">
                            <Dashboard></Dashboard>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
