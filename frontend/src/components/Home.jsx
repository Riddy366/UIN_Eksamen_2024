import "../styles/Home.css"
import PokeCard from "./PokeCard"
import TypeCard from "./TypeCard"
export default function Home(){


    return(
        <>
        <main>
            <h2 className="mainPokemonTitle">MAIN POKEMONS</h2>
            <PokeCard />
            <h2 className="typeTitle">TYPES</h2> 
            <TypeCard /> 
        </main>
      </>
    )
}
