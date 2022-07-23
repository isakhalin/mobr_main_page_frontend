import { database } from './firebase'
import { set, get, child, ref, serverTimestamp } from 'firebase/database';
import {logDOM} from "@testing-library/react";

export const sendTicketToFirebaseApi = (ticket, uid) => {
    // const newTicket = {...ticket, newDate: serverTimestamp()} // serverTimestamp дает временную метку сервера
    // console.log('newticket', newTicket) // на данный момент временной метки нет, она появится после добавления в FB
    // return set(child(ref(database), `tickets/${uid}/${newTicket.ticketDate}`), newTicket)
    // const timestamp = get(child(ref(database),".info/serverTimeOffset"))
    // timestamp.on('value', (snap) => console.log(snap.val()))

    return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
    // return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), newTicket)

};

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
    // debugger

    if (isAdmin){
        return get(child(ref(database), "tickets"));
    } else {
        // console.log('timestamp:', serverTimestamp())
        return get(child(ref(database), `tickets/${uid}`));
    }

    // if (!isAdmin){
    //     return get(child(ref(database), `tickets/${uid}`));
    // } else {
    //     // console.log('timestamp:', serverTimestamp())
    //     return get(child(ref(database), "tickets"));
    // }
};