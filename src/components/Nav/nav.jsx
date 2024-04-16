import './nav.css';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <nav className="nav container-fluid d-flex flex-row justify-content-between align-items-center">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className={`nav-list ${sidebarOpen ? 'sidebar-open' : ''} d-flex justify-content-center align-items-center`}>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/menu">Menu</Link>
                <Link className="link" to="/reservation">Reservation</Link>
                <Link className="link" to="/orderonline">Order Online</Link>
                <Link className="link" to="/about">About</Link>
            </ul>
            <div className="menu-icon" onClick={toggleSidebar}>
                <IoIosMenu size={70}/>
            </div>

        </nav>
    );
};

export default Nav;