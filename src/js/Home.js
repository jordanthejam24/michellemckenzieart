import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Project from './Project';

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
            <span className="home__line mgn-vert-lg"></span>
            <h1 className="heading__primary">Favorites</h1>
            <div className="Project__area">
            
            </div>
            <Footer />
            </div>
            )
        }
        
        export default Home
        
        // <Link to="/gallery" className="btn mgn-vert-lg">See More</Link>