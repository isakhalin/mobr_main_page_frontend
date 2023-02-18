import {
  getProfileStart,
  getProfileSuccess,
  getProfileError,
  sendProfileStart,
  sendProfileSuccess,
  sendProfileError,
  getAllProfilesStart,
  getAllProfilesSuccess,
  getAllProfilesError,
  removeUserProfileStart,
  removeUserProfileSuccess,
  removeUserProfileError,
  clearProfileStart,
  clearProfileSuccess,
  clearProfileError,
} from './actions'

export const getProfile = (uid) => async (dispatch, _, api) => {
  try {
    dispatch(getProfileStart());

    const {data} = await api.getProfileFromMongoDBApi(uid);

    dispatch(getProfileSuccess(data));
  } catch (e) {
    dispatch(getProfileError(e));
  }
}

export const getAllProfiles = (id) => async (dispatch, _, api) => {
  try {
    dispatch(getAllProfilesStart());

    const {data: profiles} = await api.getAllProfilesFromMongoDBApi(id);

    dispatch(getAllProfilesSuccess(profiles));
  } catch (e) {
    dispatch(getAllProfilesError(e));
  }
}

export const removeUserProfile = (_id) => async (dispatch, _, api) => {
  try {
    dispatch(removeUserProfileStart());

    await api.deleteProfileFromMongoDBApi(_id);

    dispatch(removeUserProfileSuccess(_id));
  } catch (error) {
    dispatch(removeUserProfileError(error));
  }
};

export const sendProfile = (uid, partOfProfile) => async (dispatch, _, api) => {
  try {
    dispatch(sendProfileStart());

    await api.updateProfileFromMongoDBApi(uid, partOfProfile);

    dispatch(sendProfileSuccess(partOfProfile));
  } catch (e) {
    dispatch(sendProfileError(e));
  }
}

export const clearProfile = () => (dispatch, _, api) => {
  try {
    dispatch(clearProfileStart());
    dispatch(clearProfileSuccess());
  } catch (e) {
    dispatch(clearProfileError(e));
  }
}