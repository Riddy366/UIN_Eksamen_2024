import React, {useState} from "react";
import "../styles/SearchBar.css";

import {FaSearch} from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    
    const fetchData = (value) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
        .then((response) => response.json())
        .then(json => {
            const results = json.results.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
            });
            setResults(results);
        });
    }

    //Hver gang input-en endres fetches data fra API'et og filtrerer det basert-
    //på teksten og input-en for og så sette results variablen til det vi får tilbake.
    
    //Kilder: 
    // https://www.youtube.com/watch?v=sWVgMcz8Q44 
    // https://www.guvi.in/blog/build-a-search-filter-component-in-react/

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    
    return (
    <div className="input-wrapper">
        <input placeholder="Søk etter pokemon" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
        />
        <FaSearch id="search-icon" />
    </div>
    );
};