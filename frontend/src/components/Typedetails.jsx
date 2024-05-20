import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function TypeDetails() {
    const { typeName } = useParams();
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        if (typeName) {
            //henter Api
            fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
                .then(response => response.json())
                .then(data => {
                    setPokemons(data.pokemon.slice(0, 10).map(p => p.pokemon));
                })
                .catch(error => console.error(`Error fetching Pokémon for type ${typeName}:`, error));
        }
    }, [typeName]);
    //Mapping av pokemon 
    return (
        <div>
            <h1>{typeName ? typeName.toUpperCase() : 'Type'}</h1>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}
