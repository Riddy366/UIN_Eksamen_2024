import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Type.css'; 


export default function Type() {
    const [types, setTypes] = useState([]);
//Henter pokemon apiene
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => {
                setTypes(data.results);
            })
            .catch(error => console.error('Error fetching types:', error));
    }, []);
//Forsiden
    return (
        <div className="types-container">
            <h1>Pokémon Types</h1>
            <ul>
                {types.map(type => (
                    <li key={type.name}>
                        <Link to={`/types/${type.name}`}>{type.name.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}
