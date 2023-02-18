import {
  getApplicationsStart,
  getApplicationsSuccess,
  getApplicationsError,
  updateApplicationStart,
  updateApplicationSuccess,
  updateApplicationError,
  removeApplicationStart,
  removeApplicationSuccess,
  removeApplicationError,
} from './actions';

export const getApplications = () => async (dispatch, _, api) => {
  const applications = [];
  try {
    dispatch(getApplicationsStart());

    const applications = await api.getApplicationsFromMongoDBApi();

    dispatch(getApplicationsSuccess(applications));
  } catch (e) {
    dispatch(getApplicationsError(e))
  }
};

export const updateFlagIsCompleteInApplication = (partOfApplication) => async (dispatch, _, api) => {
  try {
    dispatch(updateApplicationStart());

    const {data} = await api.updateApplicationToMongoDBApi(partOfApplication);

    dispatch(updateApplicationSuccess(data));
  } catch (e) {
    dispatch(updateApplicationError(e));
  }
};

export const removeApplication = (application) => async (dispatch, _, api) => {
  try {
    dispatch(removeApplicationStart());

    const {data: removedApplicationID} = await api.deleteApplicationToMongoDBApi(application._id);

    dispatch(removeApplicationSuccess(removedApplicationID));
  } catch (e) {
    dispatch(removeApplicationError(e));
  }
};
