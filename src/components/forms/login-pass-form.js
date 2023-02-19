import React, {useEffect, useState} from 'react';

/** MUI Material */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const LoginPassForm = ({getForm}) => {
    const [form, setForm] = useState({
        login: "",
        pass: "",
    });

    const setFormFromInput = (e) => {
        if (e.target.id === "login-input") {
            setForm({...form, login: e.target.value});
        }
        if (e.target.id === "pass-input") {
            setForm({...form, pass: e.target.value});
        }
    };

    useEffect(() => {
        getForm(form);
    }, [form]);

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="on"
            >
                <TextField
                    id="login-input"
                    label="Логин"
                    variant="standard"
                    value={form.login}
                    onChange={(e) => setFormFromInput(e)}
                    type="email"
                >
                    Login
                </TextField>
                <TextField
                    id="pass-input"
                    label="Пароль"
                    variant="standard"
                    value={form.pass}
                    onChange={(e) => setFormFromInput(e)}
                    type="password"
                >
                    Pass
                </TextField>
            </Box>
        </div>
    );
};