import React from "react";
import "../styles/ResultList.css";

export const ResultList = ({result}) => {
    return <div className="result-list">{result.name}</div>;
};