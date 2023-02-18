import {database} from './firebase'
import {set, get, child, ref, serverTimestamp, onValue, off, update, remove} from 'firebase/database';
import {request} from "./request.js";

export const sendTicketToFirebaseApi = (ticket, uid) => {

    // получение таймпштампа рабочий вариант

    /* //Вариант 1

//     Перекос часов
// Хотя firebase.database.ServerValue.TIMESTAMP намного точнее и предпочтительнее для большинства операций чтения/записи,
// иногда может быть полезно оценить сдвиг часов клиента по отношению к серверам базы данных Firebase Realtime.
// Вы можете прикрепить обратный вызов к местоположению /.info/serverTimeOffset , чтобы получить значение в миллисекундах,
// которое клиенты базы данных Firebase Realtime добавляют к локальному сообщаемому времени (время эпохи в миллисекундах)
// для оценки времени сервера. Обратите внимание, что на точность этого смещения может влиять сетевая задержка,
// поэтому оно полезно в первую очередь для обнаружения больших (> 1 секунды) расхождений во времени.

    const offsetRef = ref(database, ".info/serverTimeOffset"); // делам ссылку на путь в базе
    onValue(offsetRef, (snap) => { //onValue() вызывается каждый раз, когда данные изменяются в указанной ссылке на базу данных, включая изменения дочерних элементов. Чтобы ограничить размер снимков, присоединяйте их только на самом низком уровне, необходимом для просмотра изменений. Например, не рекомендуется присоединять прослушиватель к корню вашей базы данных.
            const offset = snap.val();// получаем значение из снапшота это будет расхождение во времени с клиентом
            console.log('offset\расхождение', offset)
            const estimatedServerTimeMs = new Date().getTime() + offset; //прибавляем расхождение к времени клиента и получаем время сервера
            console.log('время на серевере', estimatedServerTimeMs)
            console.log('время на компе', new Date().getTime())

            return set(child(ref(database), `tickets/${uid}/${estimatedServerTimeMs}`), {
                ...ticket,
                ticketDate: estimatedServerTimeMs
            })
        },
        {
            onlyOnce: true //Считайте данные один раз с помощью наблюдателя
        });
    // off(offsetRef) // удаляет слушатель
*/

    /* //Вариант 2
    async function getTimestamp () {
        set(child(ref(database), `timestamp`), serverTimestamp()) // записываем таймштамп в firebase
        const timestamp = await get(child(ref(database), "timestamp")).then(data=>data.val()) // получаем таймштамп из firebase
        console.log('получили таймштамп',timestamp)
        return set(child(ref(database), `tickets/${uid}/${timestamp}`), {...ticket, ticketDate: timestamp}) возвращаем запись тикета в firebase с новым временем
    }

    return getTimestamp() возвращаем результат функкции getTimestamp
*/

    //П.С. ваниарт 1 мне кажется более хороший

    return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
};

export const getTicketsFromFirebaseApi = (uid, isAdmin = false) => {
    if (isAdmin) {
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

/**
 * функция обновления данных в firebase
 * @param ticket тикет пользователя
 * @param uid uid пользователя отправившего тикет
 */
export const changeTicketStatusToFirebaseApi = (ticket, uid) => {
//Нативный метод апдейт выполняет частичное обновление данных, не перезаписывая другие данные в ноде
//     debugger
    return update(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket);
    }
// Удаление всех тикетов пользователя из FB
export const removeUserTicketsFromFBApi = (uid) => {
    return remove(child(ref(database), `tickets/${uid}`));
}

//// Api MongoDB
/** Получаем все тикеты из MongoDB. Админ получит все тикеты, пользователь только свои.
 * @param id идентификатор пользователя, который запрашивает тикеты.
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUserTicketsFromMongoDBApi = (id) => {
    return request.get(`/api/alltickets/${id}`);
}

/** Api отправляет тикет в MongoDB
 * @param id id MongoDB пользователя
 * @param ticket тикет, который нужно сохранить в БД
 * @returns {Promise<AxiosResponse<any>>}
 */
export const sendTicketToMongoDBApi = (id, ticket) => {
    return request.post(`/api/ticket/${id}`, ticket);
}

/** Апи отправляет на сервер часть тикета для его изменения в МонгоДБ
 * @param uid id отправителя
 * @param partOfTicket часть данных тикета, которые будут изменены в МонгоДБ
 * @returns {Promise<AxiosResponse<any>>}
 */
export const changeTicketStatusToMongoDBApi = (uid, partOfTicket) => {
    return request.patch(`/api/ticket/${uid}`, partOfTicket);
}

/** Удаление любого тикета от имени администратора.
 * Логика не используется в данной имплементации приложения, api на бекенде реализовано
 * @param uid id пользователя MongoDB
 * @param ticketId id тикета, который нужно удалить
 */
export const removeTicketApi = (uid, ticketId) => {
    return request.delete(`/api/ticket/${uid}`, ticketId);
}

/** Удаление всех тикетов пользователя
 * @param uid id пользователя, от имени которого выполняется запрос
 * @param deletedUserId id пользователя, тикеты которого будут удалены
 * @returns {Promise<AxiosResponse<any>>}
 */
export const removeUserTicketsFromMongoDBApi = (uid, deletedUserId) => {
    return request.delete(`/api/allusertickets/${uid}/${deletedUserId}`);
}

