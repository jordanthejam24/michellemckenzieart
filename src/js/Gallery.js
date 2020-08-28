import React from 'react';
import Piece from './Piece.js';
import '../css/Gallery.scss';
import { Link } from "react-router-dom";

function Gallery() {
    return (
        <div className="gallery">
            <h1 className="heading__primary">Gallery</h1>
            <span className="line__lg mgn-vert-small"></span>
            <div className="gallery__box">
                <Piece 
                    id={123}
                    title="Flowers"
                    photoImage={require("../img/naomi-flowers-picture.jpg")}
                    paintingImage={require("../img/naomi-flowers.jpg")}
                />
                <Piece 
                    id={12344}
                    title="Wedding"
                    photoImage={require("../img/wedding-painting-1.jpg")}
                    paintingImage={require("../img/wedding-painting-1.jpg")}
                />
            </div>
            <div className="gallery__box">
                <Piece 
                    id={1223}
                    title="Doge"
                    photoImage={require("../img/dog-painting.jpg")}
                    paintingImage={require("../img/dog-painting.jpg")}
                />
                <Piece 
                    id={123454}
                    title="Hands"
                    photoImage={require("../img/hands.jpg")}
                    paintingImage={require("../img/hands.jpg")}
                />
            </div>
            <div className="gallery__box">
                <Piece 
                    id={123443}
                    title="Things"
                    photoImage={require("../img/colors-chuttersnap.jpg")}
                    paintingImage={require("../img/colors-chuttersnap.jpg")}
                />
                <Piece 
                    id={12344}
                    title="This is a test"
                    photoImage={require("../img/hands.jpg")}
                    paintingImage={require("../img/hands.jpg")}
                />
            </div>
        </div>
    )
}

export default Gallery
