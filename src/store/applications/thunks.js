import {
    getApplicationsStart,
    getApplicationsSuccess,
    getApplicationsError,
    updateApplicationStart,
    updateApplicationSuccess,
    updateApplicationError,
    removeApplicationStart,
    removeApplicationSuccess,
    removeApplicationError,
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
export const updateFlagIsCompleteInApplication = (partOfApplication) => async (dispatch, _, api) => {
    try {
        dispatch(updateApplicationStart());

        await api.updateApplicationToFirebaseApi(partOfApplication)

        dispatch(updateApplicationSuccess(partOfApplication));
    } catch (e) {
        dispatch(updateApplicationError(e))
    }
}

// Санк для удаления апликейшена из глобального стейта и из FB
// В application приходит объект апликейшен
export const removeApplication = (application) => async (dispatch, _, api) => {
    try {
        dispatch(removeApplicationStart());

        await api.removeApplicationFromFireBaseApi(application);

        dispatch(removeApplicationSuccess(application));
    } catch (e) {
        dispatch(removeApplicationError(e))
    }
}
