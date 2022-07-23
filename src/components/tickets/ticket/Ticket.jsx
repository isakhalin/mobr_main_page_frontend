import React from 'react';
import {Button} from "@mui/material";

export const Ticket = ({el, isAdmin = false}) => {
    return (
        // <div>
            <div style={{
                border: "solid 1px grey",
                borderRadius: "5px",
                marginBottom: "5px",
                padding: "5px",
                textAlign: "left"
            }}>
                <div><span>Дата: </span><span>{el.ticketDate}</span></div>
                <div>
                    <span>Отправитель: </span><span>{el.ticketAuthorLastName} {el.ticketAuthorFirstName}</span>
                </div>
                <div><span>Срочность: </span><span>{el.ticketImportance === 'low' ? "Не срочно" : el.ticketImportance === 'normal' ? "В порядке очереди" : "Срочно"}</span></div>
                <div>
                    <span>Статус: </span><span>{el.ticketStatus === 'sent' ? "Отправлено" : el.ticketStatus === 'processed' ? "Выполняется" : "Готово"}</span>
                </div>
                <div><span>Описание проблемы:</span></div>
                <div><span><span>{el.ticketText}</span></span></div>
                {
                    isAdmin ? <Button variant={"outlined"}>Взять в работу и т.д.</Button> : <></>
                }
            </div>
        // </div>
    );
};