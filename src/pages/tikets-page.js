import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {
    Box,
    TextField,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@mui/material'

/** include Thunks */
import {getTickets, sendTicket} from '../store/tickets'
import {TicketList} from "../components/tickets";

export const TicketsPage = ({session}) => {
    const dispatch = useDispatch();
    // const {tickets, status} = useSelector((state) => state.tickets);     //перенесено в TicketList
    const {firstName, lastName} = useSelector((state) => state.profile.form);
    const [form, setForm] = useState('');
    const [importance, setImportance] = useState("low");
    const isForm = !(!!form);

    console.log("IMP", importance)

    const setFormFromTextField = (event) => {
        setForm(event.target.value)
    };

    const sandClickHandler = async () => {
        const ticket = {
            ticketAuthorFirstName: firstName,
            ticketAuthorLastName: lastName,
            ticketDate: new Date().getTime(),
            ticketImportance: importance,
            ticketStatus: "Отправлено",
            ticketExecutor: "Не назначен",
            userCompleted: false,
            ticketText: form
        };
        await dispatch(sendTicket(ticket, session.uid));
        dispatch(getTickets(session.uid))
        setForm('');
    };

    return (
        <div style={{padding: '0 10px'}}>
            <h3>Здесть можно оставить заявку на решение проблемы</h3>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{marginLeft:'10px'}}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="standard-multiline-static"
                            label="Опишите проблему"
                            multiline
                            style={{minWidth: "300px", maxWidth: "100%"}}
                            rows={4}
                            defaultValue=""
                            value={form}
                            // variant="filled"
                            onChange={setFormFromTextField}
                        />
                        <div>
                            <FormControl sx={{m: 1, minWidth: 200}} size="small">
                                <InputLabel id="demo-select-small">Срочность</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={importance}
                                    label="Срочность"
                                    onChange={(e) => setImportance(e.target.value)}
                                >
                                    <MenuItem value="low">Не срочно</MenuItem>
                                    <MenuItem value="normal">В порядке очереди</MenuItem>
                                    <MenuItem value="high">Срочно</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                style={{marginTop: "8px", padding: "5.5px 14px", lineHeight: "2"}}
                                variant="outlined"
                                onClick={sandClickHandler}
                                disabled={isForm}
                            >
                                Отправить
                            </Button>
                        </div>
                    </Box>
                </div>
                <div style={{flexGrow: '1'}}>
                    <div>Задачи, отправленные мной:</div>
                    <TicketList session={session}/> {/*передаем без админа чтобы не было лишник кнопок*/}
                </div>
            </div>
        </div>
    );
};