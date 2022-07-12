import { database, auth } from './firebase';
import {set, get, child, ref} from 'firebase/database';

//Получаем профиль пользователя из firebase
export const getProfileFromFirebase = (uid = "2Nj33j4YwDSvAyvA67KJVCu5bhp1") => {
    return get(child(ref(database), `profiles/${uid}`));
};

// записываем профиль пользователя в firebase
export const setProfileFromFirebase = (uid, profile) => {
    return set(child(ref(database), `profiles/${uid}`), profile)
}