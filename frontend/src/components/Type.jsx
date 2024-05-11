import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style/Type.css'


export default function Type({
    pokemonNames = [
        "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
        "Spearow", "Fearow", "Jigglypuff", "Wigglytuff", "Meowth",
        "Persian", "Farfetch'd", "Doduo", "Dodrio", "Lickitung",
        "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee"
    ]
}) {
    const { typeName } = useParams();
    const [typeDetails, setTypeDetails] = useState(null)

    useEffect(() => {
        if (typeName) {
            console.log(`Fetching details for type: ${typeName}`);
            fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Data received:', data);
                    setTypeDetails(data);
                })
                .catch(error => console.error('Error loading type details:', error));
        }
    }, [typeName]);

    return (
        <div className="container">
            <div className="menu">
                <ul>
                    <li><a href="#">UIN POKEDEX</a></li>
                    <li><a href="#">TEAMS</a></li>
                </ul>
            </div>
            <div className="content">
                <h1 className="title">{typeName || "Normal"}</h1>
                {typeDetails ? (
                    <div>
                        <h2>Type Details</h2>
                        <p>{typeDetails.pokemon ? typeDetails.pokemon.map(p => p.pokemon.name).join(", ") : "No Pokemon Found"}</p>
                    </div>
                ) : (
                    <div className="pokemonList">
                        {pokemonNames.map(pokemon => (
                            <div key={pokemon} className="pokemon">
                                {pokemon}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
