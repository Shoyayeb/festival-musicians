import React, { useEffect, useState } from 'react';
import Card from './../Card/Card';

const Cart = () => {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        fetch("./artist.json")
            .then(res => res.json())
            .then(data => setArtists(data))
    })
    return (
        <div>
            <div className="cart-container">
                <div className="artists-container">
                    <h3>Artists found: {artists.length} </h3>
                    {
                        artists.map(artist => <Card
                            key={artist.key}
                            artist={artist} />)
                    }
                </div>

                <div className="cart-container">

                </div>
            </div>
        </div>
    );
};

export default Cart;