import {
    sendTicketStart,
    sendTicketSuccess,
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
} from './actions'

export const sendTicket = (uid, ticket) => async (dispatch, _, api) => {
    try {
        dispatch(sendTicketStart());

        //// Логика получения отправки тикета в FB
        // await api.sendTicketToFirebaseApi(ticket, uid);
        // // const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        // // console.log("getProfileFromDB.val()", getProfileFromDB)
        // // const {firstName, middleName, lastName, dept, isAdmin, avatar} = getProfileFromDB.val();
        // //
        // // const profile = {
        // //     firstName: firstName,
        // //     lastName: lastName,
        // //     middleName: middleName,
        // //     avatar: avatar,
        // //     dept: dept,
        // //     isAdmin: isAdmin
        // // }
        // //dispatch(sendTicketSuccess(ticket, ticketCount))

        //// Логика отправки тикета в MongoDB
        // В newTicket приходит из МонгоДб тикет, который добавился в БД
        const newTicket = await api.sendTicketToMongoDBApi(uid, ticket);
        //TODO Разобраться как записать тикет в глобал стейт
        //dispatch(sendTicketSuccess(ticket, ticketCount))
    } catch (e) {
        dispatch(sendTicketError(e));
    }
}

// isAdmin - флаг обозначающий роль пользователя (админ - true, пользователь - false).
// uid - UID пользователя, передается в api чтобы обратиться только к своей ноде в firebase.
export const getTickets = (uid, isAdmin = false) => async (dispatch, _, api) => {
    try {
        dispatch(getTicketsStart());
        // const tickets = [];
        //
        // // Логика получения всех тикетов из Firebase
        // const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val()); // Приходит объект вида { dsaf: {}, fdsf: {} }
        //
        // for (let el in snap) {      // В el приходит значение свойства uid
        //     if (snap.hasOwnProperty(el)) {  //Проверяем есть ли такое свойство в объекте snap
        //         if (isAdmin) { //Проверяем адимн ли это
        //             for (let subEl in snap[el]) {   // В subEl приходит значение свойства date
        //                 if (snap[el].hasOwnProperty(subEl)) { //Проверяем есть ли такое свойство в объекте snap[el]
        //                     tickets.push(snap[el][subEl]);  //Пушим в массив содержимое свойства subEl объекта snap[el]
        //                 }
        //             }
        //         } else { // если не админ, то просто пушим в массив значение свойства объекта snap[el]
        //             tickets.push(snap[el]);
        //         }
        //     }
        // }
        //
        // // Пызырьковая сортировка массива
        // tickets.sort((a, b) => {
        //     if (a.ticketDate > b.ticketDate) {
        //         return -1;
        //     }
        //     if (a.ticketDate < b.ticketDate) {
        //         return 1;
        //     }
        //     return 0
        // })
        // dispatch(getTicketsSuccess(tickets)); // Передаемм tickets, который имеет вид [{},{}]
        // console.log("tickets", tickets)
        //////////////////////////////////////////////////////////////////////////////////////

        //// Логика получения всех тикетов из MongoDB
        // Получаем тикеты из МонгоДБ и деструктурируем данные, в data прилетает массив вида [{}{}]
        // uid это id пользователя в МонгоДБ, который запрашивает данные в api
        const {data: allTickets} = await api.getUserTicketsFromMongoDBApi(uid);
        console.log("Tickets in redux!!", allTickets);
        dispatch(getTicketsSuccess(allTickets)); // Передаемм tickets, который имеет вид [{},{}]
        //////////////////////////////////////////////////////////////////////////////////////

        // Тикеты хранятся в стейте в виде:
        // [
        //  {
        //      authorId: 5j53454fdsff, // Новое поле
        //      ticketAuthorFirstName: "Роман",
        //      ticketAuthorLastName: "Степанов",
        //      //ticketDate: 1659197374607,
        //      createdAt: 1659197374607,   // Новое поле
        //      ticketExecutor: "Не назначен",
        //      ticketImportance: "low",
        //      ticketStatus: "В работе",
        //      ticketText: "Новая таска",
        //      userCompleted: false,
        //  }
        // ]

    } catch (e) {
        console.log("Не смог получиться тикеты")
        dispatch(getTicketsError(e))
    }
}
/**
 * Функция изменения статуса тикета
 * @param ticket Тикет пользователя
 * @param uid Идентификатор пользователя
 * @param isAdmin пользователь админгистратор или нет
 * @returns {(function(*, *, *): Promise<void>)|*}
 */
// export const changeTicketStatus = (ticket, fio ,uid ) => async (dispatch, _, api) => {
export const changeTicketStatus = (ticket, uid, isAdmin) => async (dispatch, _, api) => {
    try {
        dispatch(changeTicketStatusStart());

        // //// Логика для отправки изменения тикета в FB
        // let userUid = null;
        // if (isAdmin) { //проверям админ ли это
        //     // получаем тикеты пользователей чтобы райти uid
        //     const snap = await api.getTicketsFromFirebaseApi(uid, isAdmin).then(data => data.val()); // Приходит объект вида { dsaf: {}, fdsf: {} }
        //     for (let el in snap) {      // В el приходит значение свойства uid
        //         if (snap.hasOwnProperty(el)) {  //Проверяем есть ли такое свойство в объекте snap
        //             for (let subEl in snap[el]) {   // В subEl приходит значение свойства date
        //                 if (snap[el].hasOwnProperty(subEl) && subEl == ticket.ticketDate) { //Проверяем есть ли такое свойство в объекте snap[el]
        //                     //и соотвествует ли тикет в массиве тикету из приложения
        //                     userUid = el // если да, то записываем uid пользователя
        //                 }
        //             }
        //         }
        //     }
        // } else {
        //     userUid = uid
        // }
        //
        // await api.changeTicketStatusToFirebaseApi(ticket, userUid);
        // dispatch(changeTicketStatusSuccess(ticket))
        // ///////////////////////////////////////////////////////////////////////////////////////

        //// Логика для обновления тикета в MongoDB
        // Деструктурируем данные для отправки части тикета
        const partOfTicket = {
            _id: ticket._id,
            ticketExecutor: ticket.ticketExecutor,
            ticketStatus: ticket.ticketStatus,
            userCompleted: ticket.userCompleted
        }
        console.log("ID FROM THUNK", uid)
        const updatedTicket = await api.changeTicketStatusToMongoDBApi(uid, partOfTicket);
        dispatch(changeTicketStatusSuccess(updatedTicket))
        //////////////////////////////////////////////////////////////////////////////////////////
    } catch (e) {
        dispatch(changeTicketStatusError(e));
    }
}

// Санк для удаления всех тикетов пользователя из глобал стор и FB. принимает уид пользователя и дату тикета
export const removeUserTickets = (uid, deletedUserId, isAdmin) => async (dispatch, _, api) => {
    try {
        dispatch(removeUserTicketsStart());

        // //// Логика для FB
        // // Получаем тикеты юзера из FB
        // const userTickets = await api.getTicketsFromFirebaseApi(uid).then(data => data.val()); // Приходит объект вида { Дата: {}, Дата: {} }
        //
        // const ticketDates = [];
        // for (let dataKey in userTickets) {
        //     ticketDates.push(dataKey);
        // }
        //
        // await api.removeUserTicketsFromFBApi(uid); // Удаляем тикеты пользователя из FB
        //
        // // В экшен будем передавать массив с датами тикетов, которые нужно удалить из глобал стейт
        // dispatch(removeUserTicketsSuccess(ticketDates));
        ///////////////////////////////////////////////////////////////////////////////////////////

        // uid - id пользователя, от имени которого выполняется запрос
        // deletedUserId - id пользователя, тикеты которого нужно удалить
        // В removedUserTickets вернется массив удаленных тикетов
        const removedUserTickets = await api.removeUserTicketsFromMongoDBApi(uid, deletedUserId);
        // dispatch(removeUserTicketsSuccess(ticketDates));
        ///////////////////////////////////////////////////////////////////////////////////////////
    } catch (error) {
        dispatch(removeUserTicketsError(error))
    }
};
