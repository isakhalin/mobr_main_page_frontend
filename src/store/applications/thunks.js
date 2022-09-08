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

        ////////////////////////////////////////////
        // // Логика для взаимодействия с Firebase
        // const snap = await api.getApplicationsFromFireBaseApi(); // Приходит {{}{}}
        // snap.forEach((el) => {
        //     applications.push(el.val());
        // })
        //
        // applications.sort((firstEl, secondEl) => {
        //     if (firstEl.date < secondEl.date) {
        //         return 1
        //     }
        //     if (firstEl.date > secondEl.date) {
        //         return -1
        //     }
        //     return 0
        // })
        // /////////////////////////////////////////

        ///////////////////////////////////////////////////
        // // Логика для взаимодействия с MongoDB
        // //Запросы на фетчах
        // const applications = fetch('http://localhost:3005/api/test', {
        //     method: "get",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     // body: JSON.stringify(ob)
        // })
        //     .then((data) => data.json())
        //     .then((data) => console.log('It\'s OK: ', data))
        //     .catch((error) => console.log('Some Error', error, error.message));

        // // Запросы на axios
        const applications  = await api.getApplicationsFromMongoDBApi(); // Апи возвращает из MongoDB массив с объектами
        console.log('Апликейшены получены из MongoDB: ', applications)

        // //////////////////////////////////////////////////


        dispatch(getApplicationsSuccess(applications)); // В getApplicationsSuccess нужно передать [{}{}]
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
