import React from 'react';
import '../css/Home.scss';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Project from './Project';
import {Parallax, Background } from 'react-parallax';

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
            <div className="section--projects">
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
            <div className="section--about">
                <div className="about__home">
                    <h1 className="heading__primary mgn-vert-lg">Who am I?</h1>
                    <span className="line__med mgn-vert-lg"></span> 
                    <h3 className="about__desc">
                        Life-long artist, mother, creator. I've worked with schools, programs, and on my own to create beautiful pieces to speak to your heart.
                    </h3>
                </div>
            </div>
            <div className="section--quote">
                <div className="quote">
                    <Parallax
                        blur={1}
                        bgImage={require('../img/parallax-2.jpg')}
                        bgImageAlt="Image"
                        strength={200}
                    >
                        <div className="parallax__h-lg" />
                    </Parallax>
                    <h1 className="heading__secondary parallax__title">
                        Beauty is in the eye of the beholder
                    </h1>
                </div>

            </div>
            <Footer />
        </div>
        )
    }

export default Home

// <Link to="/gallery" className="btn mgn-vert-lg">See More</Link>