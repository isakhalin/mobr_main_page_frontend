import { database } from './firebase';
import { get, set, child, ref, update} from 'firebase/database';

//сохраняем в firebase форму регистрации
export const setApplicationToFirebaseApi = (application) => {
    return set(child(ref(database), `applications/${application.date}`), application);
}

//сохраняем в firebase форму регистрации
export const updateApplicationToFirebaseApi = (application) => {
    return update(child(ref(database), `applications/${application.date}`), application);
}

// Получаем формы регистрации из firebase
export const getApplicationsFromFireBaseApi = () => {
    return get(child(ref(database), "applications"));
};