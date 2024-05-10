import React from "react";
import "../styles/SearchResult.css";
import { ResultList } from "./ResultList";

export const SearchResults = ({results}) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <ResultList result={result} key={id}/>;
            })}
        </div>
    );
    
};