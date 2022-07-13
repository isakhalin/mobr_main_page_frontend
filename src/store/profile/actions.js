import {
    GET_PROFILE_START,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
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

// Методы для очистки профиля из глобального стейта при выходе
export const clearProfileStart = () => ({
    type: GET_PROFILE_START,
})
export const clearProfileSuccess = (profile) => ({
    type: GET_PROFILE_SUCCESS,
    payload: profile
})
export const clearProfileError = (error) => ({
    type: GET_PROFILE_ERROR,
    payload: error
})