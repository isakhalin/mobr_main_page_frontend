import React, {useState} from 'react';
/** Firebase */
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../api'

/** Custom Comps */
import {LoginPassForm} from "../components"

/** MUI Material */
import {Button} from "@mui/material"

const signIn = (form) => {
    return signInWithEmailAndPassword(auth, form.login, form.pass);
};

export const LoginPage = () => {
    const [form, setForm] = useState();

    const getForm = (form) => {
        setForm(form);
    };

    return (
        <div>
            <h4>Страница входа</h4>
            <LoginPassForm getForm={getForm}/>
            <Button variant="contained" onClick={() => signIn(form)}>Войти</Button>
        </div>
    );
};