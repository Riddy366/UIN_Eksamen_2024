import {useParams} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import Header from './Header';
import "../styles/Pokecard.css"

// brukt https://github.com/PokeAPI/sprites# for å finne ut hvordan bildet skal displayes
export default function PokeCard() {

    let { pokemonName } = useParams()
    let [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        const fetchPokemonData = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const data = await response.json()
            setPokemonData(data)
          } catch (error) {
            console.error('Error fetching Pokemon data:', error)
          }
        }
        fetchPokemonData()
    }, [pokemonName])

    
    return (

        <>
        <Header/>

            <h1>{pokemonData.name}</h1>
            <img className="pokemonImage" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />

            <article className="types">
            <h2>TYPE(S)</h2>
            <p>{pokemonData.types.map(type => type.type.name).join(', ')}</p>
            </article>

            <article className="stats">
            <h2>STATS</h2>
            {pokemonData.stats.map(stat => (
                <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
            ))}
            </article>

            <article className="abilities">
            <h2>ABILITIES</h2>
            {pokemonData.abilities.map((ability, index) => (
                <div key={ability.ability.name}>
                    <h3>ABILITY {index + 1}</h3>
                    <p>{ability.ability.name}</p>
                </div>
            ))}
            </article>

        </>
    );
}
