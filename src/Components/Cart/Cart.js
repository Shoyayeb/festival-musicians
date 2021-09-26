import React, { useEffect, useState } from 'react';
import Card from './../Card/Card';

const Cart = () => {
    const [musicians, setmusicians] = useState([]);
    useEffect(() => {
        fetch("./artist.json")
            .then(res => res.json())
            .then(data => setmusicians(data))
    })
    return (
        <div>
            <h3>Musician found: {musicians.length} </h3>

            <div className=" d-flex">
                <div className="d-flex flex-wrap gap-md-5">
                    {
                        musicians.map(artist => <Card
                            key={artist.id}
                            artist={artist} />)
                    }
                </div>

                <div className="cart-container">
                    <h3>Total added: </h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;