import {
    getApplicationsStart,
    getApplicationsSuccess,
    getApplicationsError,
    updateApplicationStart,
    updateApplicationSuccess,
    updateApplicationError,
} from './actions';

export const getApplications = () => async (dispatch, _, api) => {
    const applications = [];
    try {
        dispatch(getApplicationsStart());
        const snap = await api.getApplicationsFromFireBaseApi(); // Приходит {{}{}}
        snap.forEach((el) => {
            applications.push(el.val());
        })

        applications.sort((firstEl, secondEl) => {
            if (firstEl.date < secondEl.date) {
                return 1
            }
            if (firstEl.date > secondEl.date) {
                return -1
            }
            return 0
        })

        dispatch(getApplicationsSuccess(applications)); // Нужно передать [{}{}]
    } catch (e) {
        dispatch(getApplicationsError(e))
    }
}

// Санк для обновления флага isComplete в апликейшене глобального стейта и в FB
// В partOfApplication приходит объект вида {date: application.date, isComplete: boolean}
export const updateFlagIsCompleteInApplication = (partOfApplication, indexOfApplication) => async (dispatch, _, api) => {
    try {
        dispatch(updateApplicationStart());

        // await api.updateApplicationToFirebaseApi(partOfApplication)

        dispatch(updateApplicationSuccess(partOfApplication, indexOfApplication));
    } catch (e) {
        dispatch(updateApplicationError(e))
    }
}


// import {
//     getProfileStart,
//     getProfileSuccess,
//     getProfileError,
//     clearProfileStart,
//     clearProfileSuccess,
//     clearProfileError
// } from './actions'
//
// export const getProfile = (uid) => async (dispatch, _, api) => {
//     try {
//         dispatch(getProfileStart());
//         const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);
//         console.log("getProfileFromDB.val()", getProfileFromDB)
//         const {firstName, middleName, lastName, dept, isAdmin, avatar} = getProfileFromDB.val();
//
//         const profile = {
//             firstName: firstName,
//             lastName: lastName,
//             middleName: middleName,
//             avatar: avatar,
//             dept: dept,
//             isAdmin: isAdmin
//         }
//
//         dispatch(getProfileSuccess(profile))
//     } catch (e) {
//         dispatch(getProfileError(e));
//     }
// }
//
// export const clearProfile = () => (dispatch, _, api) => {
//     try {
//         dispatch(clearProfileStart());
//         dispatch(clearProfileSuccess());
//     } catch (e) {
//         dispatch(clearProfileError(e))
//     }
// }