import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Project from './Project';
import { useStateValue } from './StateProvider';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home__landing">
                <img src={ require("../img/pencils-kelli-tungay.jpg")} alt="painting" className="home__image"/>
                <h1 className="home__title">
                    <strong className="home__title--strong">Michelle</strong>
                    <small className="home__title--small">McKenzie</small>
                </h1>
            </div>
            <Link to="/gallery" className="btn mgn-vert-lg">See More</Link>
            <span className="home__line mgn-vert-lg"></span>
            <h1 className="heading__primary">Favorites</h1>
            
            <Project />
            <Footer />
        </div>
    )
}

export default Home
