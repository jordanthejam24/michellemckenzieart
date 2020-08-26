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
                <h1 className="project__title">{title}</h1>
                <span className="line__small"></span>
                <h3 className="project__desc">{desc}</h3>
                <Link to='/project/:id' className="btn btn-small">View Project</Link>
            </div>
        </div>
    )
}

export default Project
