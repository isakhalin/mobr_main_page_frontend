import React, {useState} from 'react';

/** Custom Comps */
import {LoginPassForm} from "../components"

/** MUI Material */
import {Button} from "@mui/material"

export const LoginPage = () => {
    const [form, setForm] = useState();

    const getForm = (form) => {
        setForm(form);
    };

    return (
        <div>
            <h1>Страница входа</h1>
            <LoginPassForm getForm={getForm}/>
            <Button variant="contained">Войти</Button>
        </div>
    );
};