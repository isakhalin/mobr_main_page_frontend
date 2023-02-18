import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  SEND_PROFILE_START,
  SEND_PROFILE_SUCCESS,
  SEND_PROFILE_ERROR,
  GET_ALL_PROFILES_START,
  GET_ALL_PROFILES_SUCCESS,
  GET_ALL_PROFILES_ERROR,
  REMOVE_USER_PROFILE_START,
  REMOVE_USER_PROFILE_SUCCESS,
  REMOVE_USER_PROFILE_ERROR,
  CLEAR_PROFILE_START,
  CLEAR_PROFILE_SUCCESS,
  CLEAR_PROFILE_ERROR,
} from './types';

const clearedForm = {
  date: '',
  firstName: '',
  lastName: '',
  middleName: '',
  dept: '',
  isMinobr: false,
  isAdmin: false,
  org: '',
  prevOrg: '',
  phoneNumber: '',
  phoneNumberMobile: '',
  position: '',
  room: '',
  email: '',
  avatar: '',
}

const profileState = {
  form: {
    date: '',
    firstName: '',
    lastName: '',
    middleName: '',
    dept: '',
    isMinobr: false,
    isAdmin: false,
    org: '',
    prevOrg: '',
    phoneNumber: '',
    phoneNumberMobile: '',
    position: '',
    room: '',
    email: '',
    avatar: '',
  },
  profiles: [],
  status: {
    pendingGet: false,
    errorGet: null,
    pendingSet: false,
    errorSet: null,
    pendingAllGet: false,
    errorAllGet: null,
    pendingClear: false,
    errorClear: null,
    pendingRemove: false,
    errorRemove: null,
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
    case SEND_PROFILE_START:
      return {
        ...state,
        status: {...state.status, pendingSet: true, errorSet: null}
      };
    case SEND_PROFILE_SUCCESS:
      return {
        ...state,
        form: {...state.form, ...action.payload},
        status: {...state.status, pendingSet: false}
      };
    case SEND_PROFILE_ERROR:
      return {
        ...state,
        status: {...state.status, pendingSet: false, errorSet: action.payload}
      };
    case GET_ALL_PROFILES_START:
      return {
        ...state,
        status: {...state.status, pendingAllGet: true, errorAllGet: null}
      };
    case GET_ALL_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: [...action.payload],
        status: {...state.status, pendingAllGet: false}
      };
    case GET_ALL_PROFILES_ERROR:
      return {
        ...state,
        status: {...state.status, pendingAllGet: false, errorAllGet: action.payload}
      };
    case REMOVE_USER_PROFILE_START:
      return {
        ...state,
        status: {...state.status, pendingRemove: true, errorRemove: null}
      };
    case REMOVE_USER_PROFILE_SUCCESS:
      let newProfiles = [...state.profiles];
      state.profiles.map((el) => {
        if (el._id === action.payload) {
          newProfiles.splice(newProfiles.indexOf(el), 1);
        }
      });
      return {
        ...state,
        profiles: [...newProfiles],
        status: {pendingRemove: false}
      };
    case REMOVE_USER_PROFILE_ERROR:
      return {
        ...state,
        status: {...state.status, pendingRemove: false, errorRemove: action.payload}
      };
    case CLEAR_PROFILE_START:
      return {
        ...state,
        status: {...state.status, pendingClear: true, errorClear: null}
      };
    case CLEAR_PROFILE_SUCCESS:
      return {
        ...state,
        form: {...clearedForm},
        status: {...state.status, pendingClear: false}
      };
    case CLEAR_PROFILE_ERROR:
      return {
        ...state,
        status: {...state.status, pendingClear: true, errorClear: action.payload}
      };
    default:
      return state;
  }
}