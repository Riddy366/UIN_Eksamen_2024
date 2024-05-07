import React, {useState} from "react";
import "../styles/SearchBar.css";

import {FaSearch} from "react-icons/fa";

export const SearchBar = () => {
    const [input, setInput] = useState("");
    
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    
    return (
    <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Skrive for å søke..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
    );
};