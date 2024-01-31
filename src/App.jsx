import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TopLevelRoutes from "./routes.jsx";
import Header from "./components/Header/header.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <Header />
                <Routes>
                    <Route path="*" element={ <TopLevelRoutes /> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
