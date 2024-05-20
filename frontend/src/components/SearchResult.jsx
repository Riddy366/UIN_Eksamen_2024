import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SearchResults() {
    const { query } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
                const data = await response.json()
                const results = data.results.filter(pokemon => pokemon.name.includes(query.toLowerCase()))
                setSearchResults(results)
            } catch (error) {
                console.error('Error fetching search results:', error)
            }
        }
        fetchSearchResults()
    }, [query])

    return (
        <>
            <h1>RESULTATER</h1>
            <section className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.map((poke, index) => (
                        <article key={index} className="pokemon">
                            <Link key={index} to={`/Pokemons/${poke.name}`}>
                                <h3>{poke.name}</h3>
                            </Link>
                        </article>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </section>
        </>
    );
}