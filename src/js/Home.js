import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

function Home() {
    return (
        <div className="home">
            <Header />
            
            <img src={ require("../img/art-supplies.jpg")} alt="painting" className="home__image"/>
            <h1 className="heading__primary">Favorites</h1>
            <span className="home__line"></span>
            <Footer />
        </div>
    )
}

export default Home
