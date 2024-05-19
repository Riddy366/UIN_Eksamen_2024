import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../style/Type.css";
import { Link } from "react-router-dom";

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
      <h1>{type.toUpperCase()}</h1>
      <section className="pokemonList">
        {pokemonType.slice(0,20).map((poke, index) => (
          <article key={poke.name} className="pokemon">
            <Link key={index} to={`/Pokemons/${poke.name}`}>
              <h3>{poke.name}</h3>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}


