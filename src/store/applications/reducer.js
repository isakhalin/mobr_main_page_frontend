import {
    GET_APPLICATIONS_START,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_ERROR,
    UPDATE_APPLICATION_START,
    UPDATE_APPLICATION_SUCCESS,
    UPDATE_APPLICATION_ERROR
} from './types'

const ApplicationState = {
    applications: [],
    status: {
        pendingGet: false,
        errorGet: null,
        pendingUpdate: false,
        errorUpdate: null,
    }
}

export const ApplicationReducer = (state = ApplicationState, action) => {
    switch (action.type) {
        case GET_APPLICATIONS_START:
            return {
                ...state,
                status: {pendingGet: true, errorGet: null}
            }
        case GET_APPLICATIONS_SUCCESS:
            return {
                ...state,
                applications: [...action.payload],
                status: {...state.status, pendingGet: false}
            }
        case GET_APPLICATIONS_ERROR:
            return {
                ...state,
                status: {...state.status, pendingGet: false, errorGet: action.payload}
            }
        case UPDATE_APPLICATION_START:
            console.log("APPLICATIONS IN REDUCER", state);
            return {
                ...state,
                status: {...state.status, pendingUpdate: true, errorUpdate: null}
            }
        case UPDATE_APPLICATION_SUCCESS:
            // const finded = ApplicationState["applications"].indexOf()
            // console.log("APPLICATIONS IN REDUCER", ApplicationState["applications"]);
            console.log("ПРИШЕЛ ИНДЕКС ЭЛЕМЕНТА", action.payload.indexOfApplication)
            // console.log(state.applications.indexOf(state.applications action.payload.partOfApplication))
            console.log("OBJ IN STATE", state.applications[0])
            console.log("OBJ IN STATE AT INDEX", state.applications[action.payload.indexOfApplication])
            return {
                ...state,
                applications: [
                    ...state.applications, state.applications[action.payload.indexOfApplication] = {...state.applications[action.payload.indexOfApplication], ...action.payload.partOfApplication}
                    ],
                // applications: [
                //     ...state.applications,
                //     state.applications[action.payload.indexOfApplication]: {...state.applications[action.payload.indexOfApplication], ...action.payload.partOfApplication}
                // ],
                status: {...state.status, pendingUpdate: false}
            }
        case UPDATE_APPLICATION_ERROR:
            return {
                ...state,
                status: {...state.status, pendingUpdate: false, errorUpdate: action.payload}
            }
        default:
            return state;
    }
}


// import {
//     GET_PROFILE_START,
//     GET_PROFILE_SUCCESS,
//     GET_PROFILE_ERROR,
//     CLEAR_PROFILE_START,
//     CLEAR_PROFILE_SUCCESS,
//     CLEAR_PROFILE_ERROR
// } from './types';
//
// // По умолчанию пустая форма, используем если надо обнулить текущий стейт.
// const clearedForm = {
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     dept: "",
//     avatar: "",
//     isAdmin: false
// }
//
// const profileState = {
//     form: {
//         firstName: "",
//         lastName: "",
//         middleName: "",
//         dept: "",
//         avatar: "",
//         isAdmin: false
//     },
//     status: {
//         pendingGet: false,
//         errorGet: null,
//         pendingClear: false,
//         errorClear: null
//     }
// }
//
// export const ProfileReducer = (state = profileState, action) => {
//     switch (action.type) {
//         case GET_PROFILE_START:
//             return {
//                 ...state,
//                 status: {...state.status, pendingGet: true, errorGet: null}
//             };
//         case GET_PROFILE_SUCCESS:
//             return {
//                 ...state,
//                 form: {...state.form, ...action.payload},
//                 status: {...state.status, pendingGet: false}
//             };
//         case GET_PROFILE_ERROR:
//             return {
//                 ...state,
//                 status: {...state.status, pendingGet: false, errorGet: action.payload}
//             };
//         case CLEAR_PROFILE_START:
//             return {
//                 ...state,
//                 status: {...state.status, pendingClear: true, errorClear: null}
//             }
//         case CLEAR_PROFILE_SUCCESS:
//             return {
//                 ...state,
//                 form: {...clearedForm},
//                 status: {...state.status, pendingClear: false}
//             }
//         case CLEAR_PROFILE_ERROR:
//             return {
//                 ...state,
//                 status: {...state.status, pendingClear: true, errorClear: action.payload}
//             }
//         default:
//             return state;
//     }
// }