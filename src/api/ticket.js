import {database} from './firebase'
import {set, get, child, ref, serverTimestamp, onValue, off} from 'firebase/database';
import {logDOM} from "@testing-library/react";

export const sendTicketToFirebaseApi = (ticket, uid) => {
    // const newTicket = {...ticket, newDate: serverTimestamp()} // serverTimestamp дает временную метку сервера
    // console.log('newticket', newTicket) // на данный момент временной метки нет, она появится после добавления в FB
    // return set(child(ref(database), `tickets/${uid}/${newTicket.ticketDate}`), newTicket)
    // const timestamp = get(child(ref(database),".info/serverTimeOffset"))
    // timestamp.on('value', (snap) => console.log(snap.val()))

    // const db = getDatabase();
    /*
    Перекос часов
Хотя firebase.database.ServerValue.TIMESTAMP намного точнее и предпочтительнее для большинства операций чтения/записи,
иногда может быть полезно оценить сдвиг часов клиента по отношению к серверам базы данных Firebase Realtime.
Вы можете прикрепить обратный вызов к местоположению /.info/serverTimeOffset , чтобы получить значение в миллисекундах,
которое клиенты базы данных Firebase Realtime добавляют к локальному сообщаемому времени (время эпохи в миллисекундах)
для оценки времени сервера. Обратите внимание, что на точность этого смещения может влиять сетевая задержка,
поэтому оно полезно в первую очередь для обнаружения больших (> 1 секунды) расхождений во времени.
    */
    const offsetRef = ref(database, ".info/serverTimeOffset");
    onValue(offsetRef, (snap) => { //onValue() вызывается каждый раз, когда данные изменяются в указанной ссылке на базу данных, включая изменения дочерних элементов. Чтобы ограничить размер снимков, присоединяйте их только на самом низком уровне, необходимом для просмотра изменений. Например, не рекомендуется присоединять прослушиватель к корню вашей базы данных.
            const offset = snap.val();// получаем значение из снапшота это будет расхождение во времени с клиентом
            console.log('offset\расхождение', offset)
            const estimatedServerTimeMs = new Date().getTime() + offset; //прибавляем расхождение к времени клиента и получаем время сервера
            console.log('время на серевере', estimatedServerTimeMs)
            console.log('время на компе', new Date().getTime())
        },
        {
            onlyOnce: true //Считайте данные один раз с помощью наблюдателя
        });
    // off(offsetRef) // удаляет слушатель

    return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket)
    // return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), newTicket)

};

export const getTicketsFromFirebaseApi = (uid, isAdmin) => {
    // debugger

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