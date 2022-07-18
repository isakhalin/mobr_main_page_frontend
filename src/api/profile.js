import {database} from './firebase';
import {set, get, child, ref} from 'firebase/database';

//Получаем профиль пользователя из firebase
export const getProfileFromFirebaseApi = (uid, isAdmin) => {
    // return get(child(ref(database), `profiles/${uid}`));

    if (!isAdmin) {
        return get(child(ref(database), `profiles/${uid}`));
    } else {
        // console.log('timestamp:', serverTimestamp())
        return get(child(ref(database), "profiles"));
    }

};

// записываем профиль пользователя в firebase
export const setProfileFromFirebaseApi = (uid, profile) => {
    return set(child(ref(database), `profiles/${uid}`), profile)
}