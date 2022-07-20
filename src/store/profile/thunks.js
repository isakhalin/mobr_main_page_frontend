import {
    getProfileStart,
    getProfileSuccess,
    getProfileError,
    clearProfileStart,
    clearProfileSuccess,
    clearProfileError,
    getAllProfilesStart,
    getAllProfilesSuccess,
    getAllProfilesError
} from './actions'

export const getProfile = (uid) => async (dispatch, _, api) => {
    try {
        dispatch(getProfileStart());

        const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        console.log("getProfileFromDB.val()", getProfileFromDB.val())

        // const {firstName, middleName, lastName, dept, isAdmin, avatar} = getProfileFromDB.val();
        //
        // const profile = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     middleName: middleName,
        //     avatar: avatar,
        //     dept: dept,
        //     isAdmin: isAdmin
        // }

        dispatch(getProfileSuccess(getProfileFromDB.val()));

    } catch (e) {
        dispatch(getProfileError(e));
    }
}

export const getAllProfiles = () => async (dispatch, _, api) => {
    try {
        dispatch(getAllProfilesStart());

        const snap = await api.getAllProfilesFromFirebaseApi(); // Приходит объект вида { {}{}{} }
        // console.log("getProfileFromDB.val()", profilesData);
        const profiles = [];

        snap.forEach((el) => {
            profiles.push({uid: el.key, ...el.val()});  // получаем массив вида [ {}{}{} ], в каждый объект дописываем свойство равное ключу, который представляет собой uid.
        })                                                  // Таким образом записываем в объект uid

        dispatch(getAllProfilesSuccess(profiles));
    } catch (e) {
        console.log("Что-то пошло не так")
        dispatch(getAllProfilesError(e));
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