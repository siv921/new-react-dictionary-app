import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [searchword, setSearchword] = useState("");

    function handleResponse(response){
        console.log(response);
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
            <input type="search" onChange={handleSearchwordChange}/>
        </form>
    </div>;
}