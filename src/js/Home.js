import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <Link to="/" className="home__title">
                <strong className="home__strong">Michelle</strong>
                <small className="home__small">McKenzie</small>
            </Link>
            <img src={ require("../img/art-supplies.jpg")} alt="painting" className="home__image"/>
        </div>
    )
}

export default Home
