import React from 'react';
import '../css/About.scss';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Slider, Direction, PlayerIcon, Button } from 'react-player-controls';


function About() {
    return (
        <div className="about">
            <div className="about__top">
                <h1 className="heading__primary mgn-vert-lg">Who am I?</h1>
                <span className="line__med mgn-vert-lg"></span> 
                <h3 className="about__desc">
                    Life-long artist, mother, creator. I've worked with schools, programs, and on my own to create beautiful pieces that speak to the heart.
                </h3>
            </div>
            <div className="about__bottom">
            <h1 className="heading__tertiary">Want to Learn too?</h1>
                <div className="about__toots">
                    <h1 className="about__desc mgn-vert-med">Here are some tutorials</h1>
                    <div className="about__video">
                        <ReactPlayer url="https://www.youtube.com/watch?v=scntbAMPovI" />
                        <Slider direction={Direction.HORIZONTAL} />
                    </div>
                    <div className="about__video">
                        <ReactPlayer url="https://www.youtube.com/watch?v=_n8nmkbykBc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
