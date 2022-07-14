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

export const getTickets = () => async (dispatch, _, api) => {
    try {
        dispatch(getTicketsStart());
        const tickets = await api.getTicketsFromFirebaseApi.val();
        dispatch(getTicketsSuccess(tickets));
    } catch (e) {
        dispatch(getTicketsError(e))
    }
}