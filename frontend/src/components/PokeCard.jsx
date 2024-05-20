import { useEffect, useState } from "react"
import "../styles/Type.css"
import "../styles/Home.css"
import { Link } from "react-router-dom"

export default function PokeCard(){
    
const API_URL = 'https://pokeapi.co/api/v2/'

const [pokemon, setPokemon] = useState([])

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript

const getPokemonDetails = async (pokemonUrl) => {
   try {
     const response = await fetch(pokemonUrl);
     const data = await response.json();
     return {
       name: data.name,
       image: data.sprites.front_default,
       id: data.id
     };
   } catch (error) {
     console.error("Error fetching Pokemon details:", error);
     return null;
   }
 };


 const getPokemon = async () => {
    try {
      const response = await fetch(`${API_URL}pokemon?limit=9`);
      const data = await response.json();
      const detailedPokemon = await Promise.all(
        data.results.map(async (p) => {
          const details = await getPokemonDetails(p.url);
          return details;
        })
      );
      setPokemon(detailedPokemon.filter(p => p !== null));
    } catch (error) {
      console.error("Error fetching Pokemon", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <section className="MainPokemons"> 
      {pokemon.map((poke) => (
        <Link key={poke.name} to={`/pokemons/${poke.name}`}>
        <section className="pokemon-info">
          <img src={poke.image} alt={poke.name} />
          <h3>{capitalizeFirstLetter(poke.name)}</h3>
          <h4>#00{poke.id}</h4>
        </section>
        </Link>
      ))}   
    </section>
  );
}