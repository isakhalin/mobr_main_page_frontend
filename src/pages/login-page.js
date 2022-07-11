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
            <h4>Страница входа</h4>
            <LoginPassForm getForm={getForm}/>
            <Button variant="contained">Войти</Button>
        </div>
    );
};