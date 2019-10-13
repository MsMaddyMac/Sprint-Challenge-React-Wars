import React from "react";

const PeepsCard = props => {
    return (
        <div className="peeps-list" key={index}>
            <h2>Peeps name: {props.name}</h2>

        </div>
    )
}

export default PeepsCard;