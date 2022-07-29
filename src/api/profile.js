import {database} from './firebase';
import {set, get, child, ref, remove} from 'firebase/database';

//Получаем профиль пользователя из firebase
export const getProfileFromFirebaseApi = (uid) => {
    return get(child(ref(database), `profiles/${uid}`));
};

// записываем профиль пользователя в firebase
export const setProfileToFirebaseApi = (uid, profile) => {
    return set(child(ref(database), `profiles/${uid}`), profile)
}

// Админ может получать все профайлы пользователей
export const getAllProfilesFromFirebaseApi = () => {
        return get(child(ref(database), "profiles"))
}

// Удаление всех данных пользователя из FB
export const removeUserProfileFromFBApi = (uid) => {
    return remove(child(ref(database), `profiles/${uid}`));
}