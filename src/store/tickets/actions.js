import {
    GET_TICKETS_START,
    GET_TICKETS_SUCCESS,
    GET_TICKETS_ERROR,
    SEND_TICKET_START,
    SEND_TICKET_SUCCESS,
    SEND_TICKET_ERROR,
} from './types'

export const getTicketsStart = () => ({
    type: GET_TICKETS_START,
})
export const getTicketsSuccess = (tickets) => ({
    type: GET_TICKETS_SUCCESS,
    payload: tickets
})
export const getTicketsError = (error) => ({
    type: GET_TICKETS_ERROR,
    payload: error
})

// Методы для отправки тикетов в глобальный стейт
export const sendTicketStart = () => ({
    type: SEND_TICKET_START,
})
export const sendTicketSuccess = (ticket, ticketCount) => ({
    type: SEND_TICKET_SUCCESS,
    payload: {ticket, ticketCount}
})
export const sendTicketError = (error) => ({
    type: SEND_TICKET_ERROR,
    payload: error
})