import React from "react";
import "./Card.css";

const Card = props => (
<div className="card">
    <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
        <ul>
            <li>
            <strong>Name:</strong> {props.name}
            </li>
            <li>
            <strong>Office:</strong> {props.office}
            </li>
            <li>
            <strong>Life:</strong> {props.life}
            </li>
        </ul>
    </div>
</div>

);

export default Card;