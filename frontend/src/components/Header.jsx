import { SearchBar } from "./SearchBar";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <menu>
            <Link to="/">
          <img className="pokeball"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt="Pokeball Icon"
          />
        </Link>
                <Link to="/"><h3>UIN POKEDEX</h3></Link>
                <Link to="/teams"><h3>TEAMS</h3></Link>
            </menu>
            <SearchBar />
        </header>
        </>
    )
}