import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../style/Type.css";

export default function Type() {
  const { type } = useParams();
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    const fetchPokemonType = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        setPokemonType(data.pokemon.map(p => p.pokemon));
      } catch (error) {
        console.error('Error fetching Pokemon by type:', error);
      }
    };
    fetchPokemonType();
  }, [type]);

  return (
    <>
      <Header />
      <h1>{type.toUpperCase()} TYPE POKÉMON</h1>
      <div className="pokemonList">
        {pokemonType.map(pokemon => (
          <div key={pokemon.name} className="pokemon">
            {pokemon.name}
          </div>
        ))}
      </div>
    </>
  );
}
















/*import React from 'react';
import '../style/Type.css';
import Header from './Header';



const Type = () => {
    const pokemons = [
        "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
        "Spearow", "Fearow", "Jigglypuff", "Wigglytuff", "Meowth",
        "Persian", "Farfetch'd", "Doduo", "Dodrio", "Lickitung",
        "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee"
    ];

    console.log("Pokemons array:", pokemons);

    return (
        <div className="container">
            <Header />
            <div className="content">
                <h1 className="title">Normal</h1>
                <div className="pokemonList">
                    {pokemons.map(pokemon => {
                        console.log("Mapping pokemon:", pokemon);
                        return (
                            <div key={pokemon} className="pokemon">
                                {pokemon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Type;*/
