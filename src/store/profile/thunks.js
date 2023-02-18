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
} from './actions';

export const getProfile = (uid) => async (dispatch, _, api) => {
  try {
    dispatch(getProfileStart());

    const getProfileFromDB = await api.getProfileFromFirebaseApi(uid);

    dispatch(getProfileSuccess(getProfileFromDB.val()));
  } catch (e) {
    dispatch(getProfileError(e));
  }
};

export const getAllProfiles = () => async (dispatch, _, api) => {
  try {
    dispatch(getAllProfilesStart());

    const snap = await api.getAllProfilesFromFirebaseApi();
    const profiles = [];

    snap.forEach((el) => {
      profiles.push({uid: el.key, ...el.val()});
    });

    dispatch(getAllProfilesSuccess(profiles));
  } catch (e) {
    dispatch(getAllProfilesError(e));
  }
};

export const removeUserProfile = (uid) => async (dispatch, _, api) => {
  try {
    dispatch(removeUserProfileStart());

    await api.removeUserProfileFromFBApi(uid);

    dispatch(removeUserProfileSuccess(uid));
  } catch (error) {
    dispatch(removeUserProfileError(error));
  }
};

export const sendProfile = (uid, profile) => async (dispatch, _, api) => {
  try {
    dispatch(sendProfileStart());

    await api.setProfileToFirebaseApi(uid, profile);

    dispatch(sendProfileSuccess(profile));
  } catch (e) {
    dispatch(sendProfileError(e));
  }
};

export const clearProfile = () => (dispatch, _, api) => {
  try {
    dispatch(clearProfileStart());
    dispatch(clearProfileSuccess());
  } catch (e) {
    dispatch(clearProfileError(e));
  }
};