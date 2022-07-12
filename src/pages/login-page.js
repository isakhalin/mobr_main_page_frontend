import React, {useState} from 'react';
import {useDispatch} from "react-redux";

/** Firebase */
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../api'

/** Custom Comps */
import {LoginPassForm} from "../components"

/** Thunks */
import {getProfile} from '../store/profile'

/** MUI Material */
import {Button} from "@mui/material"

// const signIn = async (form) => {
//     const qwe = await signInWithEmailAndPassword(auth, form.login, form.pass);
// };

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState();

    const getForm = (form) => {
        setForm(form);
    };

    const onLogin = async () => {
        const qwe = await signInWithEmailAndPassword(auth, form.login, form.pass);
        // signIn(form);
        dispatch(getProfile(qwe.user.uid));
    };

    return (
        <div>
            <h4>Страница входа</h4>
            <LoginPassForm getForm={getForm}/>
            <Button variant="contained" onClick={onLogin}>Войти</Button>
        </div>
    );
};