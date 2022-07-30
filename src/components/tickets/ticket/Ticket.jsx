//Импорт реакта и редакса
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

//MUI
import {Button, ButtonGroup} from "@mui/material";

//Санки
import {changeTicketStatus} from "../../../store/tickets";
import {getAllProfiles} from "../../../store/profile";

export const Ticket = ({el, isAdmin = false, fio = null, uid}) => {
    const dispatch = useDispatch();
    // const {profiles, status} = useSelector((state) => state.profile);

    // useEffect(() => { // если админ получаем все профили пользователей
    //     if (!isAdmin) {
    //         dispatch(getAllProfiles())
    //     }
    // }, [dispatch])

    // /**
    //  * Функция получения Uid пользователя отправившего тикет
    //  * @param ticketAuthorFirstName {String} имя пользователя
    //  * @param ticketAuthorLastName {String} фамилия пользователя
    //  * @returns {String} user uid/ uid пользователя
    //  */
    // const getUserUid = ({ticketAuthorFirstName, ticketAuthorLastName}) => {
    //     // фильтруем массив профилей и получаем нужный профиль сравнивая имя и фамилию из тикета
    //     let profile = profiles.filter(elem => elem.firstName === ticketAuthorFirstName && elem.lastName === ticketAuthorLastName)
    //
    //     return profile[0].uid
    // }

    /**
     * Функция изменения статуса тикета
     * @param ticket {Object} тикет
     * @param ticketStatus {String} статус тикета
     * @param userCompleted {Boolean} Подтверждение закрытия тикета
     * @returns {Promise<void>}
     */
    const changeTicketHandler = (ticket, ticketStatus, userCompleted = false) => {
        el.ticketStatus = ticketStatus //изменяем статус элемента(полученного в пропсах) на в работе
        el.userCompleted = userCompleted // поле для подтверждение закрития тикета пользователем

        if (isAdmin) {
            el.ticketExecutor = fio // добавляем ФИО взявшего в работу
        }

        // debugger

        // const profileUid = getUserUid(ticket) // получаем uid пользователя отправившего тикет
        console.log('фио', fio)
        // console.log("PROFILES", profileUid)
        /**
         * вызываем dispatch и функцию изменения статуса тикета, передаем в нее
         * Ticket Тикет
         * isAdmin админ ли это
         */
        // dispatch(changeTicketStatus(ticket, fio, profileUid))
        dispatch(changeTicketStatus(ticket, uid, isAdmin))

        console.log('отработал')
    }

    return (
        <div style={{
            border: "solid 1px grey",
            borderRadius: "5px",
            marginBottom: "5px",
            padding: "5px",
            textAlign: "left",
            color: el.userCompleted ? 'rgba(0,0,0,0.17)' : ''
        }}>
            <div><span>Дата: </span><span>{el.ticketDate}</span></div>
            <div>
                <span>Отправитель: </span><span>{el.ticketAuthorLastName} {el.ticketAuthorFirstName}</span>
            </div>
            <div>
                <span>Срочность: </span><span>{el.ticketImportance === 'low' ? "Не срочно" : el.ticketImportance === 'normal' ? "В порядке очереди" : "Срочно"}</span>
            </div>
            <div>
                <span>Статус: </span><span>{el.ticketStatus}</span>

                {/*<span>Статус: </span><span>{el.ticketStatus === 'sent' ? "Отправлено" : el.ticketStatus === 'processed' ? "Выполняется" : "Готово"}</span>*/}
                <br/>
                <span>Исполнитель:</span><span>{el.ticketExecutor ?? " не назначен"}</span>
            </div>
            {isAdmin ? <div>
                <span>Подтверждение закрытия пользователем: </span><span>{el.userCompleted === true ? 'Подтверждено' : 'Не подтверждено'}</span>
            </div> : <></>
            }
            <div><span>Описание проблемы:</span></div>
            <div><span><span>{el.ticketText}</span></span></div>
            {/* проверяем если админ то добавляем кнопку взятия в работу и завершения
               передаем тикет, статусТикета
            */}
            {
                isAdmin ?
                    <ButtonGroup variant="outlined" aria-label="outlined button group"
                                 sx={{
                                     display: 'flex',
                                     justifyContent: 'center',
                                 }}
                    >
                        <Button disabled={el.ticketStatus === 'В работе'}
                                onClick={() => changeTicketHandler(el, 'В работе')}>В работу</Button>
                        <Button disabled={el.userCompleted}
                                onClick={() => changeTicketHandler(el, 'Готово')}
                        >Завершить</Button>
                        <Button variant="outlined"
                                disabled={el.userCompleted}
                                onClick={() => changeTicketHandler(el, 'Заявка закрыта', true)}
                        >Закрыть задачу</Button>
                    </ButtonGroup>
                    :
                    //для пользователя отрисовываем кнопку для подтверждения закрытия
                    //передаем тикет, статусТикета, и true для подтверждения заакрытия
                    !el.userCompleted
                        ?
                        <Button
                            variant="outlined"
                            onClick={() => changeTicketHandler(el, 'Заявка закрыта', true)}
                        >
                            Закрыть задачу
                        </Button>
                        :
                        // кнопка для возвращения в работу
                        <Button variant="outlined"
                                onClick={() => changeTicketHandler(el, 'В работе', false)}
                        >Вернуть в работу</Button>
            }
        </div>
    );
};