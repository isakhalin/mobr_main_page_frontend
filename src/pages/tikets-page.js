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

export const TicketsPage = ({session, isAdmin}) => {
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
            ticketStatus: "sent",
            ticketExecutor: "Не назначен",
            userCompleted: false,
            ticketText: form
        };
        await dispatch(sendTicket(ticket, session.uid));
        dispatch(getTickets(session.uid, isAdmin))
        setForm('');
    };
    //перенесено в TicketList
    // useEffect(() => {
    //     dispatch(getTickets(session.uid)); // не передаем isAdmin чтобы в заявка отображались только заявки пользователяы
    //
    //     // dispatch(getTickets(session.uid, isAdmin));
    // }, []);

    return (
        <div>
            <h3>Здесть можно оставить заявку на решение проблемы</h3>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div>
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
                                style={{marginTop: "12px", padding: "4px 10px", lineHeight: "2"}}
                                variant="outlined"
                                onClick={sandClickHandler}
                                disabled={isForm}
                            >
                                Отправить
                            </Button>
                        </div>
                    </Box>
                </div>
                <div>
                    <div>Задачи, отправленные мной:</div>
                    <TicketList session={session}/> {/*передаем без админа чтобы не было лишник кнопок*/}
                    {/*{*/}
                    {/*    !status.pendingGet ?*/}
                    {/*        tickets.map(el => (*/}
                    {/*            <Ticket el = {el}/> //передаем без админа чтобы не было лишник кнопок*/}
                    {/*            // <div style={{*/}
                    {/*            //     border: "solid 1px grey",*/}
                    {/*            //     borderRadius: "5px",*/}
                    {/*            //     marginBottom: "5px",*/}
                    {/*            //     padding: "5px",*/}
                    {/*            //     textAlign: "left"*/}
                    {/*            // }}>*/}
                    {/*            //     <div><span>Дата: </span><span>{el.ticketDate}</span></div>*/}
                    {/*            //     <div>*/}
                    {/*            //         <span>Отправитель: </span><span>{el.ticketAuthorLastName} {el.ticketAuthorFirstName}</span>*/}
                    {/*            //     </div>*/}
                    {/*            //     <div><span>Срочность: </span><span>{el.ticketImportance === 'low' ? "Не срочно" : el.ticketImportance === 'normal' ? "В порядке очереди" : "Срочно"}</span></div>*/}
                    {/*            //     <div>*/}
                    {/*            //         <span>Статус: </span><span>{el.ticketStatus === 'sent' ? "Отправлено" : el.ticketStatus === 'processed' ? "Выполняется" : "Готово"}</span>*/}
                    {/*            //     </div>*/}
                    {/*            //     <div><span>Описание проблемы:</span></div>*/}
                    {/*            //     <div><span><span>{el.ticketText}</span></span></div>*/}
                    {/*            // </div>*/}
                    {/*        ))*/}
                    {/*        : <span>Loading...</span>*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};