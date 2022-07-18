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
} from './types'

// Методы для получения профиля в глобальный стейт при входе
export const getProfileStart = () => ({
    type: GET_PROFILE_START,
})
export const getProfileSuccess = (profile) => ({
    type: GET_PROFILE_SUCCESS,
    payload: profile
})
export const getProfileError = (error) => ({
    type: GET_PROFILE_ERROR,
    payload: error
})

// Методы для получения всех профилей в глобальный стейт
export const getAllProfilesStart = () => ({
    type: GET_ALL_PROFILES_START,
})
export const getAllProfilesSuccess = (profiles) => ({
    type: GET_ALL_PROFILES_SUCCESS,
    payload: profiles
})
export const getAllProfilesError = (error) => ({
    type: GET_ALL_PROFILES_ERROR,
    payload: error
})

// Методы для очистки профиля из глобального стейта при выходе
export const clearProfileStart = () => ({
    type: CLEAR_PROFILE_START,
})
export const clearProfileSuccess = () => ({
    type: CLEAR_PROFILE_SUCCESS,
})
export const clearProfileError = (error) => ({
    type: CLEAR_PROFILE_ERROR,
    payload: error
})