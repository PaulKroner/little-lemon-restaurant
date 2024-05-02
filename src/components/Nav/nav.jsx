import './nav.css';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        toggleScroll();
    };

    const [scrollEnabled, setScrollEnabled] = useState(true);

    const toggleScroll = () => {
        setScrollEnabled(!scrollEnabled);
        if (!scrollEnabled) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    };

    return (
        <nav className="">
            <div className="navigationbar container-fluid d-flex flex-row justify-content-between align-items-center">
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
                    <IoIosMenu size={70} />
                </div>
            </div>

            {
                sidebarOpen ? (
                    <>

                    </>
                ) : (
                    <ul className={`${sidebarOpen ? '' : 'nav-list-mobile'}`}>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="navbar-logo-mobile">
                                <img src={logo} alt="logo" />
                            </div>

                            <div className="menu-icon" onClick={toggleSidebar}>
                                <IoIosMenu size={70} />
                            </div>
                        </div>

                        <div className="link-list-mobile d-flex flex-column justify-content-center align-items-center">
                            <Link className="link-mobile" to="/">Home</Link>
                            <Link className="link-mobile" to="/menu">Menu</Link>
                            <Link className="link-mobile" to="/reservation">Reservation</Link>
                            <Link className="link-mobile" to="/orderonline">Order Online</Link>
                            <Link className="link-mobile" to="/about">About</Link>
                        </div>

                    </ul>
                )
            }
        </nav>
    );
};

export default Nav;