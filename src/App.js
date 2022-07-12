//React
import React, {useEffect, useState} from "react";

/** React Router */
import {BrowserRouter, Routes, Route} from "react-router-dom"

/** Firebase */
import {auth} from './api';
import {onAuthStateChanged} from 'firebase/auth'

/** Custom comps */
import {Header} from "./components";

/** Подключаем api */
import {getProfileFromFirebase} from './api'

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
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        dept: "",
        isAdmin: false
    })

    useEffect(() => {
        const authListener = onAuthStateChanged(auth, (user) => {
            if (!!user) {
                setSession(user);
            } else {
                setSession(null)
            }
        })
        return () => authListener();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header user={session}/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/applications" element={<ApplicationsPage/>}/>
                    <Route path="/guides" element={<GuidesPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/links" element={<LinksPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/tickets" element={<TiketsPage/>}/>
                    <Route path="/*" element={<h1>404. Страница не найдена.</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

