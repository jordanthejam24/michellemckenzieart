import React from 'react';
import '../css/Piece.scss';
import { Link } from "react-router-dom";


function Piece({id, paintingImage, title, photoImage}) {
    return (
        <div className="piece">
            <div className="piece__box">
                {/* will contain a painting that on hover shows name and blurs painting */}
                <div className="piece__painting">
                    <Link to="/project/:id" className="piece__link">
                        <img src={paintingImage} alt="image" className="piece__image"/>
                    </Link>
                    <h1 className="heading__primary piece__overlay">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Piece
