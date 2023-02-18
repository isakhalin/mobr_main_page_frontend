import {
    SEND_TICKET_START,
    SEND_TICKET_SUCCESS,
    SEND_TICKET_ERROR,
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
    CHANGE_TICKET_STATUS_START,
    CHANGE_TICKET_STATUS_SUCCESS,
    CHANGE_TICKET_STATUS_ERROR,
    REMOVE_USER_TICKETS_START,
    REMOVE_USER_TICKETS_SUCCESS,
    REMOVE_USER_TICKETS_ERROR,
} from './types';

const ticketState = {
    tickets: [
        // {
        //    *_id: 543gdfg4643gdfg456          // Id тикета в МонгоДБ
        //    *authorId: 4fds32453fdsfdsf3532   // Id автора тикета
        //    ticketAuthorFirstName: "Дарт"
        //    ticketAuthorLastName: "Вейдор"
        //    *createdAt: 1658627234558
        //    //ticketDate: 1658627234558
        //    ticketImportance: "low"
        //    ticketStatus: "sent"
        //    ticketText: "asdasd"
        // }
    ],
    status: {
        pendingSet: false,
        errorSet: null,
        pendingGet: false,
        errorGet: null,
        pendingRemove: false,
        errorRemove: null
    }
}

export const TicketReducer = (state = ticketState, action) => {
    switch (action.type) {
        case GET_TICKETS_START:
            return {
                ...state,
                status: {...state.status, pendingGet: true, errorGet: null}
            }
        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...action.payload],
                status: {...state.status, pendingGet: false}
            }
        case GET_TICKETS_ERROR:
            return {
                ...state,
                status: {...state.status, pendingGet: false, errorGet: action.payload}
            }
        case SEND_TICKET_START:
            return {
                ...state,
                status: {...state.status, pendingSet: true, errorSet: null}
            }
        case SEND_TICKET_SUCCESS:
            return {
                ...state,
                tickets: {
                    ...state.tickets,
                    [action.payload.ticketCount]: [...(state.tickets[action.payload.ticketCount]) ?? [], action.payload.ticket]
                },
                status: {...state.status, pendingSet: false}
            }
        case SEND_TICKET_ERROR:
            return {
                ...state,
                status: {...state.status, pendingSet: false, errorSet: action.payload}
            }
        case CHANGE_TICKET_STATUS_START:
            return {
                ...state,
                status: {...state.status, pendingSet: true, errorSet: null}
            }
        case CHANGE_TICKET_STATUS_SUCCESS:
            // debugger
            //работаем с тикетами в работе
            // let tempTicketsInWork = [] // создали временный массив для тикетов в работе
            // if (state.ticketsInWork.length) { //если массив с тикетами в работе не пустой, то бежим по нему
            //     // tempTicketsInWork = s
            //     state.ticketsInWork.map((el) => { // бежим по массиву тикетов в работе из стейта
            //         if (el.ticketDate === action.payload.ticket.ticketDate) { // если дата элемента совпала с датой пейлоада
            //             tempTicketsInWork.push(action.payload.ticket) // если совпала то вместо элемента кладем тикет из пейлоада
            //         } else {
            //             tempTicketsInWork.push(el) //то пушим элемент во временный массив
            //         }
            //     })
            // } else {
            //     tempTicketsInWork.push(action.payload.ticket)
            // }

            // //// Логика для FB (рабочий вариант)
            // работаем с тикетами
            // let tempTickets = []
            // state.tickets.map((el) => {
            //     if (el.ticketDate === action.payload.ticket.ticketDate) {
            //         tempTickets.push(action.payload.ticket)
            //     } else {
            //         tempTickets.push(el)
            //     }
            // })

            //// Логика при использовании MGDB.
            let tempTickets = [];
            state.tickets.map((el) => {
                if (el._id === action.payload.ticket._id) {
                    // Деструктуризация. Перезаписывается только часть свойств
                    tempTickets.push({...el, ...action.payload.ticket})
                } else {
                    tempTickets.push(el)
                }
            })

            //работаем с тикетами в работе

            // let tempTicketsInWork = tempTickets.filter(el =>
            //     el.ticketExecutor === action.payload.fio
            // ) // создали временный массив для тикетов в работе,
            // //фильтруем массив с тикетами по ФИО взявшего в работу


            return {
                ...state,
                tickets: [
                    ...tempTickets
                ]
                ,
                status: {...state.status, pendingSet: false}
            }
        case CHANGE_TICKET_STATUS_ERROR:
            return {
                ...state,
                status: {...state.status, pendingSet: false, errorSet: action.payload}
            }
        case REMOVE_USER_TICKETS_START:
            return {
                ...state,
                status: {...state.status, pendingRemove: true, errorRemove: null}
            }
        case REMOVE_USER_TICKETS_SUCCESS:
            //// Логика для FB
            // const userTicketDates = action.payload;     //Сюда приходит массив с датами тикетов пользователя, которые надо удалить
            // let newTickets = [...state.tickets];        //Создаем из стейта копию массива, с которым будем работать
            // state.tickets.map((reducerTicket) => {      //Перебираем исходный массив
            //     if (reducerTicket.hasOwnProperty('ticketDate')) {    //Проверяем наличие свойства ticketDate
            //         userTicketDates.map((userTicket) => {   // Перебираем массив с датами тикетов, которые нужно удалить
            //             if (reducerTicket.ticketDate.toString() === userTicket) { //Ищем совпадения дат в исходном массиве
            //                 //newTickets.splice(newTickets.indexOf(reducerTicket), 1) //Удаляем при совпадении
            //             }
            //         })
            //     }
            // })
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //// Логика для MongoDB
            // todo эту логику нужно оптимизировать. Если нужно использовать эту логику
            const deletedTickets = action.payload;     //Сюда приходит массив с датами тикетов пользователя, которые надо удалить
            let newTickets = [...state.tickets];        //Создаем из стейта копию массива, с которым будем работать
            state.tickets.map((reducerTicket) => {      //Перебираем исходный массив
                if (reducerTicket.hasOwnProperty('_id')) {    //Проверяем наличие свойства ticketDate
                    deletedTickets.map((deletedTicket) => {   // Перебираем массив с датами тикетов, которые нужно удалить
                        if (reducerTicket._id.toString() === deletedTicket._id) { //Ищем совпадения дат в исходном массиве
                            //newTickets.splice(newTickets.indexOf(reducerTicket), 1) //Удаляем при совпадении
                        }
                    })
                }
            })
            console.log("prevTickets", state.tickets)
            console.log("newTickets", newTickets);
            return {
                ...state,
                tickets: [...newTickets],
                status: {...state.status, pendingRemove: false}
            }
        case REMOVE_USER_TICKETS_ERROR:
            return {
                ...state,
                status: {...state.status, pendingRemove: false, errorRemove: action.payload}
            }
        default:
            return state;
    }
}