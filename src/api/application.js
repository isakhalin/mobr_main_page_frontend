import { database } from './firebase';
import { get, set, child, ref, update, remove} from 'firebase/database';

//сохраняем в firebase форму регистрации
export const setApplicationToFirebaseApi = (application) => {
    return set(child(ref(database), `applications/${application.date}`), application);
}

//сохраняем в firebase форму регистрации
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