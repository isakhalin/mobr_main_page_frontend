import {
    SEND_TICKET_START,
    SEND_TICKET_SUCCESS,
    SEND_TICKET_ERROR,
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR
} from './types';

const ticketState = {
    tickets: [],
        // {
        //     test: "test1"
        // },
        // {
        //     test: "test2"
        // },
        // 1: {
        //     ticketDate: '1',
        //     ticketAuthor: 'Ivan',
        //     ticketStatus: 'sent',       //Принимает статусы: sent, processed, finished, completed
        //     ticketImportance: 'normal',   //Принимает значения: high, normal, low
        //     ticketText: 'Что-то погло не так',
        // },
        // 2: {
        //     ticketDate: '2',
        //     ticketAuthor: 'Andry',
        //     ticketStatus: 'sent',       //Принимает статусы: sent, processed, finished, completed
        //     ticketImportance: 'normal',   //Принимает значения: high, normal, low
        //     ticketText: 'Всё сломалось',
        // },
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
        default:
            return state;
    }
}