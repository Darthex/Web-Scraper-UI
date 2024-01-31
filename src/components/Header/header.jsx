import React from "react";
import Search from "../search/search.jsx";
import "./header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="app-header">
            <section>
                <Link to={'/'} className="app-title">
                    <h1 className="app-title">Torus</h1>
                </Link>
            </section>
            <section>
                <Search />
            </section>
        </div>
    )
}
