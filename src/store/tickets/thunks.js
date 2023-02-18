import {
  sendTicketStart,
  sendTicketError,
  getTicketsStart,
  getTicketsSuccess,
  getTicketsError,
  changeTicketStatusStart,
  changeTicketStatusSuccess,
  changeTicketStatusError,
  removeUserTicketsStart,
  removeUserTicketsError,
} from './actions';

export const sendTicket = (uid, ticket) => async (dispatch, _, api) => {
  try {
    dispatch(sendTicketStart());

    const newTicket = await api.sendTicketToMongoDBApi(uid, ticket);

  } catch (e) {
    dispatch(sendTicketError(e));
  }
}

export const getTickets = (uid, isAdmin = false) => async (dispatch, _, api) => {
  try {
    dispatch(getTicketsStart());

    const {data: allTickets} = await api.getUserTicketsFromMongoDBApi(uid);

    dispatch(getTicketsSuccess(allTickets));
  } catch (e) {
    dispatch(getTicketsError(e));
  }
}
/**
 * Функция изменения статуса тикета
 * @param ticket Тикет пользователя
 * @param uid Идентификатор пользователя
 * @param isAdmin пользователь админгистратор или нет
 * @returns {(function(*, *, *): Promise<void>)|*}
 */
export const changeTicketStatus = (ticket, uid, isAdmin) => async (dispatch, _, api) => {
  try {
    dispatch(changeTicketStatusStart());

    const partOfTicket = {
      _id: ticket._id,
      ticketExecutor: ticket.ticketExecutor,
      ticketStatus: ticket.ticketStatus,
      userCompleted: ticket.userCompleted
    }

    const updatedTicket = await api.changeTicketStatusToMongoDBApi(uid, partOfTicket);
    dispatch(changeTicketStatusSuccess(updatedTicket));
  } catch (e) {
    dispatch(changeTicketStatusError(e));
  }
}

export const removeUserTickets = (uid, deletedUserId, isAdmin) => async (dispatch, _, api) => {
  try {
    dispatch(removeUserTicketsStart());

    const removedUserTickets = await api.removeUserTicketsFromMongoDBApi(uid, deletedUserId);

  } catch (error) {
    dispatch(removeUserTicketsError(error));
  }
};
