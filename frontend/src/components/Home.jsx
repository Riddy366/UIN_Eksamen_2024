import { useEffect, useState } from "react"
import Header from "./Header"
export default function Home(){

const API_URL = 'https://pokeapi.co/api/v2/'

const [pokemon, setPokemon] = useState([])
const [type, setType] = useState([])

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
            <section className="MainPokemons"> 
            <h2>MAIN POKEMONS</h2>
            {pokemon?.slice(0,9).map((poke, index) => (
                <h3 key={index}>{poke.name}</h3>
            ))}   
        </section> 
        <section className="Types">        
            <h2>TYPES</h2>
            {type?.slice(0,18).map((type, index) => (
                <h3 key={index}>{type.name}</h3>
            ))}  
        </section> 
        </main>
      </>
    )
}
