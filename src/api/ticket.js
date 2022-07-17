import { database } from './firebase'
import { set, get, child, ref } from 'firebase/database';

export const sendTicketToFirebaseApi = (ticket, uid) => {
    return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
};

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
    if (!isAdmin){
        return get(child(ref(database), `tickets/${uid}`));
    } else {
        return get(child(ref(database), "tickets"));
    }
};