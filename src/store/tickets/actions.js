import {
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_ERROR,
  SEND_TICKET_START,
  SEND_TICKET_SUCCESS,
  SEND_TICKET_ERROR,
  CHANGE_TICKET_STATUS_START,
  CHANGE_TICKET_STATUS_SUCCESS,
  CHANGE_TICKET_STATUS_ERROR,
  REMOVE_USER_TICKETS_START,
  REMOVE_USER_TICKETS_SUCCESS,
  REMOVE_USER_TICKETS_ERROR,
} from './types';

export const getTicketsStart = () => ({
  type: GET_TICKETS_START,
});

export const getTicketsSuccess = (tickets) => ({
  type: GET_TICKETS_SUCCESS,
  payload: tickets
});

export const getTicketsError = (error) => ({
  type: GET_TICKETS_ERROR,
  payload: error
});

export const sendTicketStart = () => ({
  type: SEND_TICKET_START,
});

export const sendTicketSuccess = (ticket, ticketCount) => ({
  type: SEND_TICKET_SUCCESS,
  payload: {ticket, ticketCount}
});

export const sendTicketError = (error) => ({
  type: SEND_TICKET_ERROR,
  payload: error
});

export const changeTicketStatusStart = () => ({
  type: CHANGE_TICKET_STATUS_START,
});

export const changeTicketStatusSuccess = (ticket) => ({
  type: CHANGE_TICKET_STATUS_SUCCESS,
  payload: {ticket}
});

export const changeTicketStatusError = (error) => ({
  type: CHANGE_TICKET_STATUS_ERROR,
  payload: error
});

export const removeUserTicketsStart = () => ({
  type: REMOVE_USER_TICKETS_START,
});

export const removeUserTicketsSuccess = (DateOfTickets) => ({
  type: REMOVE_USER_TICKETS_SUCCESS,
  payload: DateOfTickets,
});

export const removeUserTicketsError = (error) => ({
  type: REMOVE_USER_TICKETS_ERROR,
  payload: error,
});
