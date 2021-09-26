import React, { useEffect, useState } from 'react';
import Minicard from '../Minicard/Minicard';
import Card from './../Card/Card';

const Cart = () => {
    const [musicians, setmusicians] = useState([]);
    const [artistAdd, setArtistAdd] = useState([]);
    const addArtist = (artistName) => {
        const newArtist = [...artistAdd, artistName];
        setArtistAdd(newArtist);
    }
    useEffect(() => {
        fetch("./artist.json")
            .then(res => res.json())
            .then(data => setmusicians(data))
    })

    return (

        <div>
            <h3>Musician found: {musicians.length} </h3>

            <div className=" d-flex">
                <div className="m-3 w-75 d-flex flex-wrap gap-md-5">
                    {
                        musicians.map(artist => <Card
                            key={artist.id}
                            artistAdd={addArtist}
                            artist={artist} />)
                    }
                </div>

                <div className="">
                    <h3>Total added: {artistAdd.length}</h3>
                    {
                        artistAdd.map(miniArtist => <Minicard
                            key={miniArtist.id}
                            miniArtist={miniArtist} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;