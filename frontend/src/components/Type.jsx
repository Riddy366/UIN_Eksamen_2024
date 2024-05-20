import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Type.sass";
import { Link } from "react-router-dom";

export default function Type() {
  const { type } = useParams()
  const [pokemonType, setPokemonType] = useState([])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript


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
      <h1>{type.toUpperCase()}</h1>
      <section className="pokemonList">
        {pokemonType.slice(0,20).map((poke, index) => (
          <article key={poke.name} className="pokemon">
            <Link key={index} to={`/Pokemons/${poke.name}`}>
              <h3>{capitalizeFirstLetter(poke.name)}</h3>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}


