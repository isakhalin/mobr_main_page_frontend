import {
    sendTicketStart,
    sendTicketSuccess,
    sendTicketError,
    getTicketsStart,
    getTicketsSuccess,
    getTicketsError
} from './actions'

export const sendTicket = (ticket, uid) => async (dispatch, _, api) => {
    try {
        dispatch(sendTicketStart());

        await api.sendTicketToFirebaseApi(ticket, uid);
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

        // dispatch(sendTicketSuccess(ticket, ticketCount))
    } catch (e) {
        dispatch(sendTicketError(e));
    }
}

// isAdmin - флаг обозначающий роль пользователя (админ - true, пользователь - false).
// uid - UID пользователя, передается в api чтобы обратиться только к своей ноде в firebase.
export const getTickets = (uid, isAdmin = false) => async (dispatch, _, api) => {
    try {
        dispatch(getTicketsStart());
        const tickets = [];

        const decreaseSort = () => {

        }

        if (!isAdmin) {
            const snap = await api.getTicketsFromFirebaseApi(uid).then(data => data.val()); // Приходит объект вида { dsaf: {}, fdsf: {} }
            console.log("GET SNAP", snap)
            for (let el in snap) {
                if (snap.hasOwnProperty(el)) {
                    tickets.push(snap[el]);
                }
            }
            dispatch(getTicketsSuccess(tickets));
        } else {
            const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val());    // Приходит объект вида { uid: { date: {}, date: {} }, uid: { date: {}, date: {} } }
            console.log("GET SNAP", snap)
            for (let el in snap) {      // В el приходит значение свойства uid
                if (snap.hasOwnProperty(el)) {  //Проверяем есть ли такое свойство в объекте snap
                    for (let subEl in snap[el]) {   // В subEl приходит значение свойства date
                        // console.log("SUBEL", snap[el][subEl])
                        if(snap[el].hasOwnProperty(subEl)){ //Проверяем есть ли такое свойство в объекте snap[el]
                            tickets.push(snap[el][subEl]);  //Пушим в массив содержимое свойства subEl объекта snap[el]
                        }
                    }
                }
            }

            // Пызырьковая сортировка массива
            tickets.sort((a, b) => {
                if (a.ticketDate > b.ticketDate) {
                    return -1;
                }
                if (a.ticketDate < b.ticketDate){
                    return 1;
                }
                return 0
            })
            dispatch(getTicketsSuccess(tickets)); // Передаемм tickets, который имеет вид [{},{}]
        }
    } catch (e) {
        console.log("SOME WRONG")
        dispatch(getTicketsError(e))
    }
}