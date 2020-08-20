import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

function Home() {
    return (
        <div className="home">
            <div className="home__nav" id="navtop">
                <div className="home__title">
                    <Link to="/" className="home__link">
                        <strong className="home__strong">Michelle</strong>
                        <small className="home__small">McKenzie</small>
                    </Link>
                </div>
                <div className="home__links">
                    <Link to="/about" className="home__link">
                        <h4>About</h4>
                    </Link>
                    <Link to="/gallery" className="home__link">
                        <h4>Gallery</h4>
                    </Link>
                    <Link to="/contact" className="home__link">
                        <h4>Contact</h4>
                    </Link>
                </div>

            </div>
            <img src={ require("../img/art-supplies.jpg")} alt="painting" className="home__image"/>
            <Header />
            <h1 className="heading__primary">Favorites</h1>
            <span className="home__line"></span>
            <Footer />
        </div>
    )
}

export default Home
