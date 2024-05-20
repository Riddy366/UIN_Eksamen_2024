import { useParams } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import "../styles/Pokemon.css";

export default function Pokemon(){

    let { pokemonName } = useParams()
    let [pokemonData, setPokemonData] = useState(null)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript
    

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
        <div className="container">
        <section className="mainInfo">
            <h2>{pokemonData.name.toUpperCase()}</h2>
            <img className="pokemonIMG" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
        </section>
        <aside className="stats">
            <h2>{`TYPE(S)`}</h2>
                <ul className="types">
                    {pokemonData.types.map((type, index) => (
                    <li key={index}>{capitalizeFirstLetter(type.type.name)}</li>
                    ))}
                </ul>
            <h2>STATS</h2>
                <ul className="stats">
                    {pokemonData.stats.map((stat, index) => (
                    <li key={index} className="stat">
                        <span className="statName">{stat.stat.name}</span>
                        <span className="statValue">{stat.base_stat}</span>
                    </li>
                    ))}
                </ul>
        </aside>
        <article className="abilities">
            <h2>ABILITIES</h2>
                <ul className="Abilites">
                    {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
        </article>
        </div>
    
        </>
    )
}