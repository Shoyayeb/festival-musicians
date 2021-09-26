import React from 'react';

const Minicard = (props) => {
    return (
        <div className="d-flex border border-5 mb-2 border-dark">
            <img src={props.miniArtist.img} alt="" width="100" />
            <div className="p-1">
                <h4>{props.miniArtist.name}</h4>
                <h5 className="text-danger"> {props.miniArtist.price}$</h5>
            </div>
        </div>
    );
};

export default Minicard;