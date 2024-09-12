import React from "react";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Topbar = ({ isOpen, toggleMobileMenu }) => {
    return (
        <div
            className={`topbar ${isOpen ? "open" : ""}`}
            style={{ background: "#f5c005", padding: "5px 10px" }}
        >
            <div
                className="navbar-toggler"
                onClick={toggleMobileMenu}
                style={{ cursor: "pointer" }}
            >
                <IoMdMenu size={30} />
            </div>
        </div>
    );
};

export default Topbar;
