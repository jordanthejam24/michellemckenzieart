import React from 'react';
import Piece from './Piece.js';
import '../css/Gallery.scss';
import { Link } from "react-router-dom";

function Gallery() {
    return (
        <div className="gallery">
            <Piece 
                id={123}
                title="This is a test"
                photoImage={require("../img/naomi-flowers-picture.jpg")}
                paintingImage={require("../img/naomi-flowers.jpg")}
            />
        </div>
    )
}

export default Gallery
