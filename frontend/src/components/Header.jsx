import { SearchBar } from "./SearchBar";
import "../styles/Header.css";

export default function Header(){
    return(
        <>
        <header>
            <menu>
                <h3>UIN POKEDEX</h3>
                <h3>TEAMS</h3>
            </menu>
            <SearchBar />
        </header>
        </>
    )
}