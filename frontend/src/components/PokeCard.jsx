import { useEffect, useState } from "react"
import "../styles/Home.css"
import { Link } from "react-router-dom"
export default function PokeCard(){
    const API_URL = 'https://pokeapi.co/api/v2/'

const [pokemon, setPokemon] = useState([])

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript


const getPokemon = async () => {
    try{
    const response = await fetch(`${API_URL}pokemon/`)
    const data = await response.json()
    setPokemon(data.results)
    } catch (error) {
        console.error("Error fetching Pokemon", error)
        }   
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return(
    <section className="MainPokemons"> 
        {pokemon?.slice(0,9).map((poke, index) => (
            <Link key={index} to={`/pokemons/${poke.name}`}>
                <h3>{capitalizeFirstLetter(poke.name)}</h3>
            </Link>
        ))}   
    </section>
    )

  
}
