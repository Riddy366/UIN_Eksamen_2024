import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../style/Type.css";

export default function Type() {
  const { type } = useParams()
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    const fetchPokemonType = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()
        setPokemonType(data.pokemon.map(p => p.pokemon))
      } catch (error) {
        console.error('Error fetching Pokemon by type:', error)
      }
    }
    fetchPokemonType()
  }, [type])

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
  )
}


