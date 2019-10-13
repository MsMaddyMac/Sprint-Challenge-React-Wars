import React, { useState, useEffect } from "react";
import axios from "axios";
import PeepsCard from "./PeepsCard";

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
            console.log('Sorry, no peeps here!', error);
        });
    }, []);

    return (
        
        <div className="peep">
            {peeps.map(peep => {
                return (
                    <PeepsCard 
                    key={peep.url}
                    name={peep.name}
                    birthYear={peep.birth_year}
                    />
                );
            })}
        </div>
    );
}