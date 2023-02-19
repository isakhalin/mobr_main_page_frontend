import {database} from './firebase'
import {set, get, child, ref, update, remove} from 'firebase/database';

export const sendTicketToFirebaseApi = (ticket, uid) => {
  return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
};

export const getTicketsFromFirebaseApi = (uid, isAdmin = false) => {
  if (isAdmin) {
    return get(child(ref(database), "tickets"));
  } else {
    return get(child(ref(database), `tickets/${uid}`));
  }
};

/**
 * функция обновления данных в firebase
 * @param ticket тикет пользователя
 * @param uid uid пользователя отправившего тикет
 */
export const changeTicketStatusToFirebaseApi = (ticket, uid) => {
  return update(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket);
};

// Удаление всех тикетов пользователя из FB
export const removeUserTicketsFromFBApi = (uid) => {
  return remove(child(ref(database), `tickets/${uid}`));
};