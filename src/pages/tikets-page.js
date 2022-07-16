import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {
    Box,
    TextField,
    Button
} from '@mui/material'

/** include Thunks */
import {getTickets} from '../store/tickets'

export const TiketsPage = ({session, isAdmin}) => {
    const dispatch = useDispatch();
    const {tickets, status} = useSelector((state) => state.tickets);
    const [form, setForm] = useState();
    const isForm = !(!!form);


    const setFormFromTextField = (event) => {
        setForm(event.target.value)
    };

    const sandClickHandler = () => {

    };

    console.log("TICKETS", tickets)

    useEffect(() => {

    }, [tickets])

    useEffect(() => {
        dispatch(getTickets(session.uid, isAdmin));
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
                    {/*{tickets ?*/}
                    {/*        console.log("&&&&", tickets)*/}

                    {/*    : <div>Loading...</div>*/}
                    {/*}*/}
                </Box>
                <div>
                    <div>Задачи, отправленные мной:</div>
                    {
                        !status.pendingGet ?
                            tickets.map(el => (
                                <div style={{border: "solid 1px grey", borderRadius: "5px", marginBottom: "5px", padding: "5px", textAlign: "left"}}>
                                    <div><span>Дата: </span><span>{el.ticketDate}</span></div>
                                    <div><span>Отправитель: </span><span>{el.ticketAuthorLastName} {el.ticketAuthorFirstName}</span></div>
                                    <div><span>Статус: </span><span>{el.ticketStatus === 'sent' ? "Отправлено" : el.ticketStatus === 'processed' ? "Выполняется" : "Готово"}</span></div>
                                    <div><span>Описание проблемы:</span></div>
                                    <div><span><span>{el.ticketText}</span></span></div>
                                </div>
                            ))
                            : <span>Loading...</span>
                    }
                </div>
            </div>
        </div>
    );
};