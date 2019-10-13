import React from "react";

const PeepsCard = props => {
    return (
        <div className="peeps-list">
            <h2>Peeps name: {props.name}</h2>
            <p>Birth Year: {props.birthYear}</p>
            


        </div>
    )
}

export default PeepsCard;