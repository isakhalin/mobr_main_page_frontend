import { database } from './firebase';
import { get, set, child, ref} from 'firebase/database';

//сохраняем в firebase форму регистрации
export const setApplicationToFirebaseApi = (application) => {
    return set(child(ref(database), `applications/${new Date}`), application);
}