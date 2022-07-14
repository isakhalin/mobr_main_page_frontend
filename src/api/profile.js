import { database } from './firebase';
import {set, get, child, ref} from 'firebase/database';

//Получаем профиль пользователя из firebase
export const getProfileFromFirebaseApi = (uid = "2Nj33j4YwDSvAyvA67KJVCu5bhp1") => {
    return get(child(ref(database), `profiles/${uid}`));
};

// записываем профиль пользователя в firebase
export const setProfileFromFirebaseApi = (uid, profile) => {
    return set(child(ref(database), `profiles/${uid}`), profile)
}