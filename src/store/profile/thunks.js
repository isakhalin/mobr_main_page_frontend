import {
    getProfileStart,
    getProfileSuccess,
    getProfileError,
    sendProfileStart,
    sendProfileSuccess,
    sendProfileError,
    getAllProfilesStart,
    getAllProfilesSuccess,
    getAllProfilesError,
    removeUserProfileStart,
    removeUserProfileSuccess,
    removeUserProfileError,
    clearProfileStart,
    clearProfileSuccess,
    clearProfileError,
} from './actions'

export const getProfile = (uid) => async (dispatch, _, api) => {
    try {
        dispatch(getProfileStart());

        //// Логика для получения профиля из FB
        // const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        // console.log("getProfileFromDB.val()", getProfileFromDB.val());
        // Отправляем профиль в глобальный стейт через диспатч
        // В getProfileSuccess передаем загруженный из БД профиль
        // dispatch(getProfileSuccess(getProfileFromDB.val()));
        ////////////////////////////////////////////////////////////////////

        //// Логика для получения профиля из MongoDB
        // Получаем профиль из MongoDB. И деструктуризируем входящие данные
        // В data приходит объект.
        const {data} = await api.getProfileFromMongoDBApi(uid);
        console.log("DATA", data)
        // Отправляем профиль в глобальный стейт через диспатч
        // В getProfileSuccess передаем загруженный из БД профиль
        dispatch(getProfileSuccess(data));  // Передаем {}
        /////////////////////////////////////////////////////////////////////
    } catch (e) {
        dispatch(getProfileError(e));
    }
}

export const getAllProfiles = (id) => async (dispatch, _, api) => {
    try {
        dispatch(getAllProfilesStart());


        //// Логика получения всех профилей из FB
        // const snap = await api.getAllProfilesFromFirebaseApi(); // Приходит объект вида { {}{}{} }
        // const profiles = [];
        //
        // snap.forEach((el) => {
        //     profiles.push({uid: el.key, ...el.val()});  // получаем массив вида [ {}{}{} ], в каждый объект дописываем свойство равное ключу, который представляет собой uid.
        // })                                              // Таким образом записываем в объект uid
        //
        // dispatch(getAllProfilesSuccess(profiles));
        ///////////////////////////////////////////////////////////

        //// Логика получения всех профилей из MongoDB
        const {data: profiles} = await api.getAllProfilesFromMongoDBApi(id);  // получаем массив вида [ {}{}{} ]
        dispatch(getAllProfilesSuccess(profiles)); // Передаем в глобальный стейт массив вида [{}{}]
        ///////////////////////////////////////////////////////////

    } catch (e) {
        dispatch(getAllProfilesError(e));
    }
}

// Санк для удаления профиля пользователя из глобал стор и FB или MongoDB
export const removeUserProfile = (_id) => async (dispatch, _, api) => {
    try {
        dispatch(removeUserProfileStart());

        //// Логика для удаления профиля из FB
        // await api.removeUserProfileFromFBApi(uid); // Удаляем профиль из FB
        // dispatch(removeUserProfileSuccess(uid));
        ////////////////////////////////////////////////////////////////////

        //// Логика для удаления профиля из MongoDB
        await api.deleteProfileFromMongoDBApi(_id); // Удаляем профиль из MongoDB
        dispatch(removeUserProfileSuccess(_id))
        ////////////////////////////////////////////////////////////////////
    } catch (error) {
        dispatch(removeUserProfileError(error));
    }
};

export const sendProfile = (uid, partOfProfile) => async (dispatch, _, api) => {
    try {
        dispatch(sendProfileStart());

        //// Логика для отправки профиля в FB
        // await api.setProfileToFirebaseApi(uid, profile);
        // dispatch(sendProfileSuccess(profile));
        //////////////////////////////////////////////////////////////////////

        //// Логика для отправки профиля в MongoDB
        await api.updateProfileFromMongoDBApi(uid, partOfProfile);
        dispatch(sendProfileSuccess(partOfProfile));
        //////////////////////////////////////////////////////////////////////
    } catch (e) {
        dispatch(sendProfileError(e))
    }
}

export const clearProfile = () => (dispatch, _, api) => {
    try {
        dispatch(clearProfileStart());
        dispatch(clearProfileSuccess());
    } catch (e) {
        dispatch(clearProfileError(e))
    }
}