import {
    GET_APPLICATIONS_START,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_ERROR,
    UPDATE_APPLICATION_START,
    UPDATE_APPLICATION_SUCCESS,
    UPDATE_APPLICATION_ERROR,
} from './types';

export const getApplicationsStart = () => ({
    type: GET_APPLICATIONS_START,
})
export const getApplicationsSuccess = (applications) => ({
    type: GET_APPLICATIONS_SUCCESS,
    payload: applications,
})
export const getApplicationsError = (error) => ({
    type: GET_APPLICATIONS_ERROR,
    payload: error,
})

// Экшен для обновления апликейшена (заявки пользователя)
export const updateApplicationStart = () => ({
    type: UPDATE_APPLICATION_START,
})
export const updateApplicationSuccess = (partOfApplication, indexOfApplication) => ({
    type: UPDATE_APPLICATION_SUCCESS,
    payload: {partOfApplication, indexOfApplication},
})
export const updateApplicationError = (error) => ({
    type: UPDATE_APPLICATION_ERROR,
    payload: error,
})