import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {
    Box,
    TextField,
    Button
} from '@mui/material'

/** include Thunks */
import { getTickets } from '../store/tickets'

export const TiketsPage = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState();
    const isForm = !(!!form);

    const tickets = useSelector(state => state.tickets.tickets);

    const setFormFromTextField = (event) => {
        setForm(event.target.value)
    };

    const sandClickHandler = () => {

    };

    console.log("TICKETS", tickets)

    useEffect(() => {
        dispatch(getTickets());
    }, []);

    return (
        <div>
            <h3>Здесть можно оставить заявку на решение проблемы</h3>
            <div style={{display: "flex"}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '45ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="standard-multiline-static"
                        label="Опишите проблему"
                        multiline
                        rows={4}
                        defaultValue=""
                        // variant="filled"
                        onChange={setFormFromTextField}
                    />
                    <div>
                        <Button
                            variant="outlined"
                            onClick={sandClickHandler}
                            disabled={isForm}
                        >
                            Отправить
                        </Button>
                    </div>
                </Box>
                <div>
                    <div>Все активные задачи:</div>
                    <div>Задачи, отправленные мной:</div>
                </div>
            </div>
        </div>
    );
};