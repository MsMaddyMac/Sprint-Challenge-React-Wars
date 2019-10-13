import React from "react";
import styled from "styled-components";

const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: #cacfd2;
  color: #4b7fad;
  width: 230px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const TextColor = styled.p`
  color: black;
`;

const PeepsCard = props => {
    return (
        <Pulse className="peeps-list">
            <h2>{props.name}</h2>
            <TextColor>Birth Year: {props.birthYear}</TextColor>
            <TextColor>{props.gender}</TextColor>
        </Pulse>
    )
}

export default PeepsCard;