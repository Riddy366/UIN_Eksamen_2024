import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/Type.css"
import { Link } from "react-router-dom"

export default function Type() {
  const { type } = useParams()
  const [pokemonType, setPokemonType] = useState([])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript

//Henter pokemon apiene, tok maks på 20 pokemons.
useEffect(() => {
    const fetchPokemonType = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        const detailedPokemon = await Promise.all(
          data.pokemon.slice(0, 20).map(async (p) => {
            const pokemonResponse = await fetch(p.pokemon.url)
            const pokemonData = await pokemonResponse.json()
            return {
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
              id: pokemonData.id
            };
          })
        );
        setPokemonType(detailedPokemon)

      } catch (error) {
        console.error('Error fetching Pokemon by type:', error)
      }

    }
    fetchPokemonType()
  }, [type])

  return (
    <>
      <h1>{type ? type.toUpperCase() : ''}</h1>
      <section className="pokemonList">
        {pokemonType.map(poke => (
          <article key={poke.id} className="pokemon">
            <Link to={`/pokemons/${poke.name}`}>
              <img src={poke.image} alt={poke.name} />
              <div>
                <h3>{capitalizeFirstLetter(poke.name)}</h3>
                <span>#{poke.id}</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
