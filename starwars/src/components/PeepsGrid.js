import React, { useState, useEffect } from "react";
import axios from "axios";
import PeepsCard from "./PeepsCard";
import styled from "styled-components";

const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
`;

export default function PeepsList() {
    const [peeps, setPeeps] = useState([]);
    

    useEffect(() => {
        axios
        .get (`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results);
            setPeeps(response.data.results);
        })
        .catch(error => {
            console.log("Sorry, no peeps here!", error);
        });
    }, []);

    return (
        
        <Cards className="peep">
            {peeps.map((peep, index) => {
                return (
                    <PeepsCard 
                    key={index}
                    name={peep.name}
                    gender={peep.gender}
                    birthYear={peep.birth_year}
                    />
                );
            })}
        </Cards>
    );
}