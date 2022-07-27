import {database} from './firebase'
import {set, get, child, ref, remove, serverTimestamp, onValue, off} from 'firebase/database';

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

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
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

// Удаление всех тикетов пользователя из FB
export const removeUserTicketsFromFBApi = (uid) => {
    return remove(child(ref(database), `tickets/${uid}`));
}