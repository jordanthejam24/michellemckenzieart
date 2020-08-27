import React from 'react';
import '../css/Piece.scss';


function Piece({id, paintingImage, title, photoImage}) {
    return (
        <div className="piece">
            <div className="piece__box">
                {/* will contain a painting that on hover shows name and blurs painting */}
                <div className="piece__painting">
                    <img src={paintingImage} alt="image" className="piece__image"/>
                    <div className="piece__overlay">
                        <h1 className="heading__primary piece__title">Flowers</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Piece
