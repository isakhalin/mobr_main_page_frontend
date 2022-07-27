import {
    SEND_TICKET_START,
    SEND_TICKET_SUCCESS,
    SEND_TICKET_ERROR,
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
    REMOVE_USER_TICKETS_START,
    REMOVE_USER_TICKETS_SUCCESS,
    REMOVE_USER_TICKETS_ERROR,
} from './types';

const ticketState = {
    tickets: [
        // {
        //    ticketAuthorFirstName: "Дарт"
        //    ticketAuthorLastName: "Вейдор"
        //    ticketDate: 1658627234558
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
        case REMOVE_USER_TICKETS_START:
            return {
                ...state,
                status: {...state.status, pendingRemove: true, errorRemove: null}
            }
        case REMOVE_USER_TICKETS_SUCCESS:
            const userTicketDates = action.payload;     //Сюда приходит массив с датами тикетов пользователя, которые надо удалить
            let newTickets = [...state.tickets];        //Создаем из стейта копию массива, с которым будем работать
            state.tickets.map((reducerTicket) => {      //Перебираем исходный массив
                if (reducerTicket.hasOwnProperty('ticketDate')){    //Проверяем наличие свойства ticketDate
                    userTicketDates.map((userTicket) => {   // Перебираем массив с датами тикетов, которые нужно удалить
                        if(reducerTicket.ticketDate.toString() === userTicket){ //Ищем совпадения дат в исходном массиве
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