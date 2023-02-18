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
  tickets: [],
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
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        status: {...state.status, pendingGet: false}
      };
    case GET_TICKETS_ERROR:
      return {
        ...state,
        status: {...state.status, pendingGet: false, errorGet: action.payload}
      };
    case SEND_TICKET_START:
      return {
        ...state,
        status: {...state.status, pendingSet: true, errorSet: null}
      };
    case SEND_TICKET_SUCCESS:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [action.payload.ticketCount]: [...(state.tickets[action.payload.ticketCount]) ?? [], action.payload.ticket]
        },
        status: {...state.status, pendingSet: false}
      };
    case SEND_TICKET_ERROR:
      return {
        ...state,
        status: {...state.status, pendingSet: false, errorSet: action.payload}
      };
    case CHANGE_TICKET_STATUS_START:
      return {
        ...state,
        status: {...state.status, pendingSet: true, errorSet: null}
      };
    case CHANGE_TICKET_STATUS_SUCCESS:
      let tempTickets = [];
      state.tickets.map((el) => {
        if (el._id === action.payload.ticket._id) {
          tempTickets.push({...el, ...action.payload.ticket});
        } else {
          tempTickets.push(el);
        }
      });

      return {
        ...state,
        tickets: [
          ...tempTickets
        ]
        ,
        status: {...state.status, pendingSet: false}
      };
    case CHANGE_TICKET_STATUS_ERROR:
      return {
        ...state,
        status: {...state.status, pendingSet: false, errorSet: action.payload}
      };
    case REMOVE_USER_TICKETS_START:
      return {
        ...state,
        status: {...state.status, pendingRemove: true, errorRemove: null}
      };
    case REMOVE_USER_TICKETS_SUCCESS:
      const deletedTickets = action.payload;
      let newTickets = [...state.tickets];
      state.tickets.map((reducerTicket) => {
        if (reducerTicket.hasOwnProperty('_id')) {
          deletedTickets.map((deletedTicket) => {
            if (reducerTicket._id.toString() === deletedTicket._id) {
              //newTickets.splice(newTickets.indexOf(reducerTicket), 1) //Удаляем при совпадении
            }
          })
        }
      })
      return {
        ...state,
        tickets: [...newTickets],
        status: {...state.status, pendingRemove: false}
      };
    case REMOVE_USER_TICKETS_ERROR:
      return {
        ...state,
        status: {...state.status, pendingRemove: false, errorRemove: action.payload}
      };
    default:
      return state;
  }
}