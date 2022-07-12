import {
    GET_PROFILE_START,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR
} from './types';

const profileState = {
    form: {
        firstName: "",
        lastName: "",
        dept: "",
        isAdmin: false
    },
    status: {
        pendingGet: false,
        errorGet: null
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
        default:
            return state;
    }
}