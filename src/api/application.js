import {database} from './firebase';
import {get, set, child, ref, update, remove} from 'firebase/database';
import {request} from "./request";  // Api для выполнения запросов к беку

// Api Firebase
// Сохраняем в firebase форму регистрации
export const setApplicationToFirebaseApi = (application) => {
    return set(child(ref(database), `applications/${application.date}`), application);
}

// Сохраняем в firebase форму регистрации
export const updateApplicationToFirebaseApi = (application) => {
    return update(child(ref(database), `applications/${application.date}`), application);
}

// Получаем формы регистрации из firebase
export const getApplicationsFromFireBaseApi = () => {
    return get(child(ref(database), "applications"));
};

// Удаляем форму регистрации из firebase
export const removeApplicationFromFireBaseApi = (application) => {
    return remove(child(ref(database), `applications/${application.date}`));
};

// Api MongoDB Cloud
// Чтение из MongoDB всех апликейшенов.
export const getApplicationsFromMongoDBApi = () => {
    return request.get('/api/allapplications').then(response => response.data);
};

// Запись апликейшена в МонгоДБ.
export const setApplicationToMongoDBApi = (application) => {    // В application должен прийти объект который отправляем
    return request.post('/api/application', application);
};

// Изменение апликейшена в Монго.
export const updateApplicationToMongoDBApi = ({_id, isComplete}) => {
    return request.patch(`/api/application/${_id}`, {isComplete});
};

// Удаление аппликейшена из Монго
export const deleteApplicationToMongoDBApi = (id) => {
    return request.delete(`/api/application/${id}`);
};