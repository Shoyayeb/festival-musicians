import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, price, age, genre, members, social, img } = props.artist;
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{genre}</p>
            </div>
            <ul className="list-group list-group-flush ">
                <li className="list-group-item">Members: {members}</li>
                <li className=" list-group-item"><h3>Price: {price}$</h3></li>
            </ul>
            <div className=" justify-content-around py-1 d-flex">
                <a href={social.youtube}>
                    <i class="fab fa-youtube"></i>
                </a>
                <a href={social.twitter}>
                    <i class="fab fa-twitter "></i>
                </a>
            </div>
            <div className="card-footer d-grid">
                <button className="btn btn-lg btn-dark ">Add To Concert</button>
            </div>
        </div >
    );
};

export default Card;