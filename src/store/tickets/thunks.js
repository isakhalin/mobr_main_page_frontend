import {
    sendTicketStart,
    sendTicketSuccess,
    sendTicketError,
    getTicketsStart,
    getTicketsSuccess,
    getTicketsError
} from './actions'

export const sendTicket = (ticket, ticketCount) => async (dispatch, _, api) => {
    try {
        dispatch(sendTicketStart());
        // const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        // console.log("getProfileFromDB.val()", getProfileFromDB)
        // const {firstName, middleName, lastName, dept, isAdmin, avatar} = getProfileFromDB.val();
        //
        // const profile = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     middleName: middleName,
        //     avatar: avatar,
        //     dept: dept,
        //     isAdmin: isAdmin
        // }

        dispatch(sendTicketSuccess(ticket, ticketCount))
    } catch (e) {
        dispatch(sendTicketError(e));
    }
}

export const getTickets = (uid, isAdmin) => async (dispatch, _, api) => {
    try {
        dispatch(getTicketsStart());

        if (!isAdmin) {
            const snap = await api.getTicketsFromFirebaseApi(uid).then(data => data.val());
            dispatch(getTicketsSuccess(snap));
        } else {
            const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val());    // Приходит объект вида { [{},{}] , [{},{}] }
            const tickets = [];
            for (let el in snap) {
                if (snap.hasOwnProperty(el)) {
                    tickets.push(...snap[el]);
                }
            }
            dispatch(getTicketsSuccess(tickets));
        }


        // const data = snap.val();
        // console.log("SNAP", snap)

        // snap.forEach(el => {
        //     el.forEach(el => {
        //         console.log("LOG", el.val())
        //         tickets.push(el.val());
        //     })
        //
        // })
        // console.log("NEW TICKETS", tickets)

    } catch (e) {
        console.log("SOME WRONG")
        dispatch(getTicketsError(e))
    }
}