import { database } from './firebase';
import { get, set, child, ref, update, remove} from 'firebase/database';
import {request} from './request';

// Api Firebase
//сохраняем в firebase форму регистрации
export const setApplicationToFirebaseApi = (application) => {
    return set(child(ref(database), `applications/${application.date}`), application);
};

export const updateApplicationToFirebaseApi = (application) => {
    return update(child(ref(database), `applications/${application.date}`), application);
};

// Получаем формы регистрации из firebase
export const getApplicationsFromFireBaseApi = () => {
    return get(child(ref(database), "applications"));
};

// Удаляем форму регистрации из firebase
export const removeApplicationFromFireBaseApi = (application) => {
    return remove(child(ref(database), `applications/${application.date}`));
};

// Api MongoDB Cloud
export const getApplicationsFromMongoDBApi = () => {
    return request.get('/api/allapplications').then(response => response.data);
};