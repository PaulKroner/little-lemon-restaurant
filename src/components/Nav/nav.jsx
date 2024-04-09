import './nav.css';
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav-list">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/menu">Menu</Link>
                <Link className="link" to="/reservation">Reservation</Link>
                <Link className="link" to="/orderonline">Order Online</Link>
                <Link className="link" to="/about">About</Link>
            </ul>
        </nav>
    );
};

export default Nav;