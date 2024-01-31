import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./search.css"

export default function Search() {

    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    function Navigate() {
        setSearchInput('')
        navigate(`/single?s=${searchInput}`)
    }

    return (
        <div className="search-container">
            <input type='text' className="text-box" value={searchInput}
                   onKeyDown={(e) => e.key === "Enter" && Navigate()}
                   onChange={(event) => setSearchInput(event.target.value)}/>
            <button className="search-icon" onClick={Navigate}>[ % ]</button>
        </div>
    )
}
