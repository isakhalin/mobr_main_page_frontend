import {
    getProfileStart,
    getProfileSuccess,
    getProfileError
} from './actions'

export const getProfile = (uid) => async (dispatch, _, api) => {
    try {
        dispatch(getProfileStart());
        const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
        console.log("getProfileFromDB.val()", getProfileFromDB)
        const {firstName, lastName, dept, isAdmin} = getProfileFromDB.val();

        const profile = {
            firstName: firstName,
            lastName: lastName,
            dept: dept,
            isAdmin: isAdmin
        }

        dispatch(getProfileSuccess(profile))
    } catch (e) {
        dispatch(getProfileError(e));
    }
}