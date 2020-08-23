import React from 'react';
import '../css/Header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="navbar">
            <div className="header">
            {/* Decided to use a tag to refresh at the top of the home */}
                <a href="/" className="logo">
                    <strong className="logo__strong">M</strong>
                    <small className="logo__small">M</small>
                </a>
                <div className="header__links">
                    <Link to="/about" className="header__link">
                        <h4 className="btn-main">About</h4>
                    </Link>
                    <Link to="/gallery" className="header__link">
                        <h4 className="btn-main">Gallery</h4>
                    </Link>
                    <Link to="/contact" className="header__link">
                        <h4 className="btn-main">Contact</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
