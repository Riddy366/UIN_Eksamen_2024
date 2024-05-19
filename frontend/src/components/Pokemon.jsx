import { useParams } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"

export default function Pokemon(){

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

    if (!pokemonData) {
        return <div>Loading...</div>
      }
    
    return(
        <>
        <Header />
    <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h2>{`TYPE(S)`}</h2>
            <ul className="Types">
                {pokemonData.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
                ))}
            </ul>
        <h2>STATS</h2>
            <ul className="Stats">
                {pokemonData.stats.map((stat, index) => (
                <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                </li>
                ))}
            </ul>
        <h2>Abilities</h2>
            <ul className="Abilites">
                {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        
    </div>
        </>
    )
}