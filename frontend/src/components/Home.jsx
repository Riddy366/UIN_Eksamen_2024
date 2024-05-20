import { useEffect, useState } from "react"
import Header from "./Header"
import "../styles/Home.css"
import { Link } from "react-router-dom"
export default function Home(){

const API_URL = 'https://pokeapi.co/api/v2/'

const [pokemon, setPokemon] = useState([])
const [type, setType] = useState([])

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

    const getType = async () => {
        try{
        const response = await fetch(`${API_URL}type/`)
        const data = await response.json()
        setType(data.results)
        } catch (error) {
            console.error("Error fetching type", error)
            }   
        }

    useEffect(() => {
        getPokemon()
        getType()
    }, [])
    console.log(pokemon)
    console.log(type)
    

    return(
        <>
        <Header/>
        <main>
            <h2>MAIN POKEMONS</h2>
            <section className="MainPokemons"> 
            {pokemon?.slice(0,9).map((poke, index) => (
                <Link key={index} to={`/pokemons/${poke.name}`}>
                    <h3>{capitalizeFirstLetter(poke.name)}</h3>
                </Link>
            ))}   
        </section>
        <h2>TYPES</h2> 
        <section className="Types">        
            {type?.slice(0,18).map((type, index) => (
                <Link key={index} to={`/${type.name}`}>
                    <h3>{capitalizeFirstLetter(type.name)}</h3>
                </Link>
            ))}  
        </section> 
        </main>
      </>
    )
}
