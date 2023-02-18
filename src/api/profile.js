import {database} from './firebase';
import {set, get, child, ref, remove} from 'firebase/database';
import {request} from "./request.js";

//// Api Firebase Cloud
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

//// Api MongoDB Cloud
/** Апи отправляет на сервер новый профиль пользователя
 * @param newProfile Принимает новый профиль пользователя
 * @returns {Promise<AxiosResponse<any>>} Возвращает промайс
 */
export const setProfileToMongoDBApi = async (newProfile) => {
    return request.post('/api/profile', newProfile);
};

/** Апи получает профиль из MongoDB по ID
 * @param uid Принимает на вход искомый UID
 * @returns {Promise<AxiosResponse<any>>} Объект профиля пользователя
 */
export const getProfileFromMongoDBApi = (uid) => {
    return request.get(`/api/profile/${uid}`);
}

/** Апи получает все профили из MongoDB
 * @param id Принимает на вход id(MongoDB) пользователя.
 */
export const getAllProfilesFromMongoDBApi = (id) => {
    return request.get(`/api/allprofiles/${id}`);
}

export const updateProfileFromMongoDBApi = (id, partOfProfile) => {
    return request.patch(`/api/profile/${id}`, partOfProfile)
}
export const deleteProfileFromMongoDBApi = (id) => {
    return request.delete(`/api/profile/${id}`);
}