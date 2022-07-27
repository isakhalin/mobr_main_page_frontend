import {
    SEND_TICKET_START,
    SEND_TICKET_SUCCESS,
    SEND_TICKET_ERROR,
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
    CHANGE_TICKET_STATUS_START,
    CHANGE_TICKET_STATUS_SUCCESS,
    CHANGE_TICKET_STATUS_ERROR
} from './types';

const ticketState = {
    tickets: [],
    ticketsInWork: [],
    status: {
        pendingSet: false,
        errorSet: null,
        pendingGet: false,
        errorGet: null,
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


            // работаем с тикетами
            let tempTickets = []
            state.tickets.map((el) => {
                if (el.ticketDate === action.payload.ticket.ticketDate) {
                    tempTickets.push(action.payload.ticket)

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
                // ticketsInWork: [...tempTicketsInWork],
                status: {...state.status, pendingSet: false}
            }
        case CHANGE_TICKET_STATUS_ERROR:
            return {
                ...state,
                status: {...state.status, pendingSet: false, errorSet: action.payload}
            }
        default:
            return state;
    }
}