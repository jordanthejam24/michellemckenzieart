import React from 'react';
import '../css/Project.scss';
import {Link} from 'react-router-dom';

function Project({id, title, paintingImage, photoImage, desc}) {

    return (
        <div className="project">
            <div className="project__image">
                <img src={paintingImage} alt="image" className="project__image"/>
            </div>
            <div className="project__info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to='/project/:id' className="btn btn-small">More Info</Link>
            </div>
        </div>
    )
}

export default Project
