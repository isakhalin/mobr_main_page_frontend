//React
import React from "react";

//React Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Custom comps
import {Header} from "./components"

//Style
import './App.css';


export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<h1>Main page</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

