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
    //Нативный метод апдейт выполняет частичное обновление данных, не перезаписывая другие данные в ноде
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
///////////////////////////////////////////////////////////////////////////////

// Api MongoDB Cloud
// Чтение из MongoDB всех апликейшенов. Апи используетс в санке store/applications.
export const getApplicationsFromMongoDBApi = () => {
    return request.get('/api/allapplications').then(response => response.data);
    // console.log('Апликейшены получены из MongoDB: ', applications)
};

// Запись апликейшена в МонгоДБ. Апи используется в санке store/applications
export const setApplicationToMongoDBApi = (application) => {    // В application должен прийти объект который отправляем
    return request.post('/api/application', application);
    // return fetch('http://localhost:3005/api/application', {
    //     method: 'POST',
    //     headers: {'content-type': 'application/json'},
    //     body: JSON.stringify(application)
    // })
};

// Изменение апликейшена в Монго. PATCH обновляется отдельные свойства, не перезаписывая весь объект.
export const updateApplicationToMongoDBApi = ({_id, isComplete}) => {
    return request.patch(`/api/application/${_id}`, {isComplete});
};

// Удаление аппликейшена из Монго
export const deleteApplicationToMongoDBApi = (id) => {
    console.log("PATH FOR DELETE: ", `/api/application/${id}`)
    return request.delete(`/api/application/${id}`);
};