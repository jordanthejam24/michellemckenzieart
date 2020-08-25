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
            <h1 className="heading__primary mgn-vert-lg">Favorites</h1>
            <div className="section--1">
                <div className="projects">
                    <Project 
                        id={1234}
                        title="Flowers"
                        paintingImage={require("../img/naomi-flowers.jpg")}
                        photoImage={require("../img/naomi-flowers-picture.jpg")}
                        desc="test"
                    />
                </div>
            </div>
            <div className="section--2">
                <div className="projects">
                    <Project 
                        id={1234}
                        title="Flowers"
                        paintingImage={require("../img/hands.jpg")}
                        photoImage={require("../img/hands.jpg")}
                        desc="test"
                    />
                </div>
            </div>
                    
            <Footer />
            </div>
            )
        }
        
        export default Home
        
        // <Link to="/gallery" className="btn mgn-vert-lg">See More</Link>