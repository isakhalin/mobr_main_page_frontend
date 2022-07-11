//React
import React from "react";

//React Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Custom comps
import {Header} from "./components";

/** Pages */
import {
    ApplicationsPage,
    ContactsPage,
    GuidesPage,
    LinksPage,
    MainPage,
    LoginPage,
    SignUpPage,
    TiketsPage
} from "./pages";

//Style
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/applications" element={<ApplicationsPage />}/>
                    <Route path="/guides" element={<GuidesPage />}/>
                    <Route path="/contacts" element={<ContactsPage />}/>
                    <Route path="/links" element={<LinksPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/tickets" element={<TiketsPage />}/>
                    <Route path="/*" element={<h1>404. Страница не найдена.</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

