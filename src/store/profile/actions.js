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
  CLEAR_PROFILE_ERROR
} from './types';

export const getProfileStart = () => ({
  type: GET_PROFILE_START,
});

export const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileError = (error) => ({
  type: GET_PROFILE_ERROR,
  payload: error
});

export const getAllProfilesStart = () => ({
  type: GET_ALL_PROFILES_START,
});

export const getAllProfilesSuccess = (profiles) => ({
  type: GET_ALL_PROFILES_SUCCESS,
  payload: profiles
});

export const getAllProfilesError = (error) => ({
  type: GET_ALL_PROFILES_ERROR,
  payload: error
});

export const sendProfileStart = () => ({
  type: SEND_PROFILE_START,
});

export const sendProfileSuccess = (profile) => ({
  type: SEND_PROFILE_SUCCESS,
  payload: profile
});

export const sendProfileError = (error) => ({
  type: SEND_PROFILE_ERROR,
  payload: error
});

export const removeUserProfileStart = () => ({
  type: REMOVE_USER_PROFILE_START,
});

export const removeUserProfileSuccess = (_id) => ({
  type: REMOVE_USER_PROFILE_SUCCESS,
  payload: _id,
});

export const removeUserProfileError = (error) => ({
  type: REMOVE_USER_PROFILE_ERROR,
  payload: error
});

export const clearProfileStart = () => ({
  type: CLEAR_PROFILE_START,
});

export const clearProfileSuccess = () => ({
  type: CLEAR_PROFILE_SUCCESS,
});

export const clearProfileError = (error) => ({
  type: CLEAR_PROFILE_ERROR,
  payload: error
});