import { database } from './firebase'
import { set, get, child, ref } from 'firebase/database';

export const sendTicketToFirebaseApi = (ticket) => {
    return set(child(ref(database), `tickets/${new Date}`), ticket)
};

export const getTicketsFromFirebaseApi = () => {
  return get(child(ref(database), "tickets"));
};