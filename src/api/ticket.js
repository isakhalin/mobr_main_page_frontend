import {database} from './firebase';
import {set, get, child, ref, update, remove} from 'firebase/database';
import {request} from './request.js';

export const sendTicketToFirebaseApi = (ticket, uid) => {
  return set(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket);
};

export const getTicketsFromFirebaseApi = (uid, isAdmin = false) => {
  if (isAdmin) {
    return get(child(ref(database), "tickets"));
  } else {
    return get(child(ref(database), `tickets/${uid}`));
  }
};

/**
 * функция обновления данных в firebase
 * @param ticket тикет пользователя
 * @param uid uid пользователя отправившего тикет
 */
export const changeTicketStatusToFirebaseApi = (ticket, uid) => {
  return update(child(ref(database), `tickets/${uid}/${ticket.ticketDate}`), ticket);
};

// Удаление всех тикетов пользователя из FB
export const removeUserTicketsFromFBApi = (uid) => {
  return remove(child(ref(database), `tickets/${uid}`));
};

// Api MongoDB
/** Получаем все тикеты из MongoDB. Админ получит все тикеты, пользователь только свои.
 * @param id идентификатор пользователя, который запрашивает тикеты.
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUserTicketsFromMongoDBApi = (id) => {
  return request.get(`/api/alltickets/${id}`);
};

/** Api отправляет тикет в MongoDB
 * @param id id MongoDB пользователя
 * @param ticket тикет, который нужно сохранить в БД
 * @returns {Promise<AxiosResponse<any>>}
 */
export const sendTicketToMongoDBApi = (id, ticket) => {
  return request.post(`/api/ticket/${id}`, ticket);
};

/** Апи отправляет на сервер часть тикета для его изменения в МонгоДБ
 * @param uid id отправителя
 * @param partOfTicket часть данных тикета, которые будут изменены в МонгоДБ
 * @returns {Promise<AxiosResponse<any>>}
 */
export const changeTicketStatusToMongoDBApi = (uid, partOfTicket) => {
  return request.patch(`/api/ticket/${uid}`, partOfTicket);
};

/** Удаление любого тикета от имени администратора.
 * Логика не используется в данной имплементации приложения, api на бекенде реализовано
 * @param uid id пользователя MongoDB
 * @param ticketId id тикета, который нужно удалить
 */
export const removeTicketApi = (uid, ticketId) => {
  return request.delete(`/api/ticket/${uid}`, ticketId);
};

/** Удаление всех тикетов пользователя
 * @param uid id пользователя, от имени которого выполняется запрос
 * @param deletedUserId id пользователя, тикеты которого будут удалены
 * @returns {Promise<AxiosResponse<any>>}
 */
export const removeUserTicketsFromMongoDBApi = (uid, deletedUserId) => {
  return request.delete(`/api/allusertickets/${uid}/${deletedUserId}`);
};
