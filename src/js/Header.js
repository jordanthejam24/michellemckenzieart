import React from 'react';
import '../css/Header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="navbar">
            <div className="header">
                <a href="#navtop" className="logo">
                    <strong className="logo__strong">M</strong>
                    <small className="logo__small">M</small>
                </a>
                <div className="header__links">
                    <Link to="/about" className="header__link">
                        <h4>About</h4>
                    </Link>
                    <Link to="/gallery" className="header__link">
                        <h4>Gallery</h4>
                    </Link>
                    <Link to="/contact" className="header__link">
                        <h4>Contact</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
