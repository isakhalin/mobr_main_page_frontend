import { database } from './firebase'
import { set, get, child, ref } from 'firebase/database';

export const sendTicketToFirebaseApi = (ticket) => {
    return set(child(ref(database), `tickets/${new Date}`), ticket)
};

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
    if (!isAdmin){
        console.log("АПИ ПОД ЮЗЕРОМ")
        return get(child(ref(database), `tickets/${uid}`));
    } else {
        console.log("АПИ ПОД АДМИНОМ")
        return get(child(ref(database), "tickets"));
    }
};