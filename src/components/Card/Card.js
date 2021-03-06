import React from "react";
import "./Card.css";

// deconstructing the props for legibility
const Card = ({onClick, image, name, life, office, id}) => (
<div onClick={onClick} className={`card`}>
    <div className="img-container">
        <img alt={name} src={image} id={id} />
    </div>
    <div className="content">
        <ul>
            <li>
            {name} 
            </li>
        </ul>
    </div>
</div>

);

export default Card;