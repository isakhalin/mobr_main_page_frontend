import {
    GET_PROFILE_START,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR
} from './types'

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