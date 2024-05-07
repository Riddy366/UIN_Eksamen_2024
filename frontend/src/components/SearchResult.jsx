import React from "react";
import "../styles/SearchResult.css";

export const SearchResults = ({results}) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <ul key={id}>{result.name}</ul>;
            })}
        </div>
    );
    
};