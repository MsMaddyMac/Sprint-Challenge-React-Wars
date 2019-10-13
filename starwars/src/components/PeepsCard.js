import React from "react";

const PeepsCard = props => {
    return (
        <div className="peeps-list">
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            {/* <p>{props.homeWorld}</p> */}
            <p>Birth Year: {props.birthYear}</p>
            


        </div>
    )
}

export default PeepsCard;