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
  removeUserTicketsSuccess,
  removeUserTicketsError,
} from './actions';

export const sendTicket = (ticket, uid) => async (dispatch, _, api) => {
  try {
    dispatch(sendTicketStart());

    await api.sendTicketToFirebaseApi(ticket, uid);
  } catch (e) {
    dispatch(sendTicketError(e));
  }
}

// isAdmin - флаг обозначающий роль пользователя (админ - true, пользователь - false).
export const getTickets = (uid, isAdmin = false) => async (dispatch, _, api) => {
  try {
    dispatch(getTicketsStart());
    const tickets = [];

    const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val());

    for (let el in snap) {
      if (snap.hasOwnProperty(el)) {
        if (isAdmin) {
          for (let subEl in snap[el]) {
            if (snap[el].hasOwnProperty(subEl)) {
              tickets.push(snap[el][subEl]);
            }
          }
        } else {
          tickets.push(snap[el]);
        }
      }
    }

    tickets.sort((a, b) => {
      if (a.ticketDate > b.ticketDate) {
        return -1;
      }
      if (a.ticketDate < b.ticketDate) {
        return 1;
      }
      return 0
    })
    dispatch(getTicketsSuccess(tickets));

  } catch (e) {
    dispatch(getTicketsError(e));
  }
};

/**
 * Функция изменения статуса тикета
 * @param ticket Тикет пользователя
 * @param isAdmin пользователь админгистратор или нет
 * @returns {(function(*, *, *): Promise<void>)|*}
 */
export const changeTicketStatus = (ticket, uid, isAdmin) => async (dispatch, _, api) => {
  try {
    dispatch(changeTicketStatusStart());

    let userUid = null;
    if (isAdmin) {
      const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val());
      for (let el in snap) {
        if (snap.hasOwnProperty(el)) {
          for (let subEl in snap[el]) {
            if (snap[el].hasOwnProperty(subEl) && subEl == ticket.ticketDate) {
              userUid = el
            }
          }
        }
      }
    } else {
      userUid = uid;
    }

    await api.changeTicketStatusToFirebaseApi(ticket, userUid);

    dispatch(changeTicketStatusSuccess(ticket))
  } catch (e) {
    dispatch(changeTicketStatusError(e));
  }
}

export const removeUserTickets = (uid, isAdmin) => async (dispatch, _, api) => {
  try {
    dispatch(removeUserTicketsStart());

    const userTickets = await api.getTicketsFromFirebaseApi(uid).then(data => data.val());

    const ticketDates = [];
    for (let dataKey in userTickets) {
      ticketDates.push(dataKey);
    }

    await api.removeUserTicketsFromFBApi(uid);

    dispatch(removeUserTicketsSuccess(ticketDates));
  } catch (error) {
    dispatch(removeUserTicketsError(error));
  }
};
