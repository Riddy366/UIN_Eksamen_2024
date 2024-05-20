import { SearchBar } from "./SearchBar";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <menu>
                <Link to="/"><h3>UIN POKEDEX</h3></Link>
                <Link to="/teams"><h3>TEAMS</h3></Link>
            </menu>
            <SearchBar />
        </header>
        </>
    )
}