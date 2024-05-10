import React, {useState} from "react";
import "../styles/SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("");
    
    const fetchData = (value) => {
        fetch("https://pokeapi.co/api/v2/")
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        });
    }
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
    </div>
    );
};