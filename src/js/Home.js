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
            <span className="line__lg mgn-vert-lg"></span>
            <h1 className="heading__primary mgn-vert-lg">Favorite Projects</h1>
            <div className="section--1">
                <div className="projects">
                    <Project 
                        id={1234}
                        title="Flowers"
                        paintingImage={require("../img/naomi-flowers.jpg")}
                        photoImage={require("../img/naomi-flowers-picture.jpg")}
                        desc="A simple picture of the beauties in life. My precious daughter in the tulip fields."
                    />
                </div>
                <div className="projects">
                    <Project 
                        id={1235}
                        title="Hands"
                        paintingImage={require("../img/hands.jpg")}
                        photoImage={require("../img/hands.jpg")}
                        desc="A recreation of a photograph for a good Friday Service."
                    />
                </div>
                <div className="projects">
                    <Project 
                        id={1235}
                        title="Maury"
                        paintingImage={require("../img/dog-painting.jpg")}
                        photoImage={require("../img/dog-painting.jpg")}
                        desc="A painting of my daughter's cute dog Maury, (sounds like Mory)."
                    />
                </div>
            </div>
            <div className="section--2">
                <p className="line__lg"></p>
                <p className="line__lg"></p>
                <p className="line__lg"></p>
                <p className="line__lg"></p>
                <p className="line__lg"></p>
                <p className="line__lg"></p>
                <p className="line__lg"></p>
            </div>
            <Footer />
            </div>
            )
        }
        
        export default Home
        
        // <Link to="/gallery" className="btn mgn-vert-lg">See More</Link>