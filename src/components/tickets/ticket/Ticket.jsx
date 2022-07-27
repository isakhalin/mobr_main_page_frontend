import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeTicketStatus} from "../../../store/tickets";
// import {useEffect} from "@types/react";
import {getAllProfiles} from "../../../store/profile";

export const Ticket = ({el, isAdmin = false, fio}) => {
    const dispatch = useDispatch();
    const {profiles, status} = useSelector((state) => state.profile);

    useEffect(() => { // если админ получаем все профили пользователей
        if (isAdmin) {
            dispatch(getAllProfiles())
        }
    }, [dispatch])

    /**
     * Функция получения Uid пользователя отправившего тикет
     * @param ticketAuthorFirstName имя пользователя
     * @param ticketAuthorLastName фамилия пользователя
     * @returns {String} user uid/ uid пользователя
     */
    const getProfiles = ({ticketAuthorFirstName, ticketAuthorLastName}) => {
        // фильтруем массив профилей и получаем нужный профиль сравнивая имя и фамилию из тикета
        let profile = profiles.filter(elem => elem.firstName === ticketAuthorFirstName && elem.lastName === ticketAuthorLastName)

        return profile[0].uid
    }
    /**
     * Функция изменения статуса тикета
     * @param ticket тикет
     * @returns {Promise<void>}
     */
    const changeTicketHandler = async (ticket) => {
        el.ticketStatus = 'processed' //изменяем статус элемента(полученного в пропсах) на в работе
        el.ticketExecutor = fio // добавляем ФИО взявшего в работу
        // debugger

        const profileUid = getProfiles(ticket) // получаем uid пользователя отправившего тикет
        console.log('фио', fio)
        console.log("PROFILES", profileUid)
        /**
         * вызываем dispatch и функцию изменения статуса тикета, передаем в нее
         * Тикет
         * ФИО взявшего в работу
         * UID пользователя отправившего тикет
         */
        // dispatch(changeTicketStatus(ticket, fio, profileUid))
        dispatch(changeTicketStatus(ticket, profileUid))

        console.log('отработал')
    }

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
            <div>
                <span>Срочность: </span><span>{el.ticketImportance === 'low' ? "Не срочно" : el.ticketImportance === 'normal' ? "В порядке очереди" : "Срочно"}</span>
            </div>
            <div>
                <span>Статус: </span><span>{el.ticketStatus === 'sent' ? "Отправлено" : el.ticketStatus === 'processed' ? "Выполняется" : "Готово"}</span>
                <br/>
                <span>Исполнитель:</span><span>{el.ticketExecutor ?? " не назначен"}</span>
            </div>
            <div><span>Описание проблемы:</span></div>
            <div><span><span>{el.ticketText}</span></span></div>
            {/* проверяем если админ то добавляем кнопку взятия в работу*/}
            {
                isAdmin ? <Button variant={"outlined"} disabled={el.ticketStatus === 'processed'}
                                  onClick={() => changeTicketHandler(el)}>Взять в работу и т.д.</Button> : <></>
            }
        </div>
        // </div>
    );
};