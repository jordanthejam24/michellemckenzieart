import React from 'react';
import '../css/Project.scss';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Project(id, title, paintingImage, photoImage, desc) {
    const [{}, dispatch] = useStateValue();

    return (
        <div className="project">
            <div className="project__image">
                <img src={ require("../img/naomi-flowers.jpg")} alt="image" className="project__image"/>
            </div>
            <Link to='/gallery' className="btn">More Info</Link>
        </div>
    )
}

export default Project
