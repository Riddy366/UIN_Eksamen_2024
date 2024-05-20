import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.sass";
import searchIcon from "../assets/searchIcon.svg"


export const SearchBar = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleChange = (value) => {
        setInput(value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (input.trim()) {
            navigate(`/searchresults/${input.trim()}`)
        }
    }

    return (
        <nav className="input-wrapper">
            <form onSubmit={handleSearch}>
                <input 
                    placeholder="Søk etter pokemon" 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}
                />
                <img className="searchIcon" src={searchIcon} alt="searchIcon" onClick={handleSearch} />
            </form>
        </nav>
    )
}
//Kilder: 
    // https://www.youtube.com/watch?v=sWVgMcz8Q44 
    // https://www.guvi.in/blog/build-a-search-filter-component-in-react/
    // https://reactrouter.com/en/main/hooks/use-navigate