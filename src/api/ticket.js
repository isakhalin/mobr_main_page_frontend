import { database } from './firebase'
import { set, get, child, ref, serverTimestamp } from 'firebase/database';

export const sendTicketToFirebaseApi = (ticket, uid) => {
    // const newTicket = {...ticket, newDate: serverTimestamp()} // serverTimestamp дает временную метку сервера
    // console.log('newticket', newTicket) // на данный момент временной метки нет, она появится после добавления в FB
    // return set(child(ref(database), `tickets/${uid}/${newTicket.ticketDate}`), newTicket)

    return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
};

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
    if (!isAdmin){
        return get(child(ref(database), `tickets/${uid}`));
    } else {
        // console.log('timestamp:', serverTimestamp())
        return get(child(ref(database), "tickets"));
    }
};