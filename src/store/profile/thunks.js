import {
    getProfileStart,
    getProfileSuccess,
    getProfileError,
    clearProfileStart,
    clearProfileSuccess,
    clearProfileError
} from './actions'

export const getProfile = (uid) => async (dispatch, _, api) => {
    try {
        dispatch(getProfileStart());
        const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        console.log("getProfileFromDB.val()", getProfileFromDB)
        const {firstName, middleName, lastName, dept, isAdmin, avatar} = getProfileFromDB.val();

        const profile = {
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            avatar: avatar,
            dept: dept,
            isAdmin: isAdmin
        }

        dispatch(getProfileSuccess(profile))
    } catch (e) {
        dispatch(getProfileError(e));
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