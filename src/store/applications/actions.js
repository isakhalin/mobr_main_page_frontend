import {
    GET_APPLICATIONS_START,
    GET_APPLICATIONS_SUCCESS,
    GET_APPLICATIONS_ERROR
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