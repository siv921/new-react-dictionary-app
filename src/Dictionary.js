import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [searchword, setSearchword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        let apiKey = `d102f34aao5ce8t34e64ea7aab7a37d2`
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSearchwordChange(event) {
        setSearchword(event.target.value)
    }

    return <div className="Dictionary">
            <form onSubmit={search}>
                <input className="form-control" type="search" onChange={handleSearchwordChange} placeholder="Search for a word"/>
            </form>
        <Results results={results}/>
           </div>;
}