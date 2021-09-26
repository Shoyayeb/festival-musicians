import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, price, age, genre, members, social, img } = props;
    console.log(name);
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age: {age}</li>
                    <li className="list-group-item">Price: {price}</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="/" className="card-link">Card link</a>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
};

export default Card;