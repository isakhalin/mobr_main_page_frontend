import {
    GET_PROFILE_START,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    GET_ALL_PROFILES_START,
    GET_ALL_PROFILES_SUCCESS,
    GET_ALL_PROFILES_ERROR,
    CLEAR_PROFILE_START,
    CLEAR_PROFILE_SUCCESS,
    CLEAR_PROFILE_ERROR
} from './types';

// По умолчанию пустая форма, используем если надо обнулить текущий стейт.
const clearedForm = {
    firstName: "",
    lastName: "",
    middleName: "",
    dept: "",
    avatar: "",
    isAdmin: false,
    isMinobr: "",
    org: "",
    phoneNumber: "",
    phoneNumberMobile: ""
}

const profileState = {
    form: {
        firstName: "",
        lastName: "",
        middleName: "",
        dept: "",
        avatar: "",
        isAdmin: false,
        isMinobr: "",
        org: "",
        phoneNumber: "",
        phoneNumberMobile: ""
    },
    profiles: [],
    status: {
        pendingGet: false,
        errorGet: null,
        pendingAllGet: false,
        errorAllGet: null,
        pendingClear: false,
        errorClear: null
    }
}

export const ProfileReducer = (state = profileState, action) => {
    switch (action.type) {
        case GET_PROFILE_START:
            return {
                ...state,
                status: {...state.status, pendingGet: true, errorGet: null}
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                form: {...state.form, ...action.payload},
                status: {...state.status, pendingGet: false}
            };
        case GET_PROFILE_ERROR:
            return {
                ...state,
                status: {...state.status, pendingGet: false, errorGet: action.payload}
            };
        case GET_ALL_PROFILES_START:
            return {
                ...state,
                status: {...state.status, pendingAllGet: true, errorAllGet: null}
            }
        case GET_ALL_PROFILES_SUCCESS:
            return {
                ...state,
                profiles: [...action.payload],
                status: {...state.status, pendingAllGet: false}
            }
        case GET_ALL_PROFILES_ERROR:
            return {
                ...state,
                status: {...state.status, pendingAllGet: false, errorAllGet: action.payload}
            }
        case CLEAR_PROFILE_START:
            return {
                ...state,
                status: {...state.status, pendingClear: true, errorClear: null}
            }
        case CLEAR_PROFILE_SUCCESS:
            return {
                ...state,
                form: {...clearedForm},
                status: {...state.status, pendingClear: false}
            }
        case CLEAR_PROFILE_ERROR:
            return {
                ...state,
                status: {...state.status, pendingClear: true, errorClear: action.payload}
            }
        default:
            return state;
    }
}