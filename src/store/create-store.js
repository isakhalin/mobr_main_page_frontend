import React from "react";
import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux"

import thunk from "redux-thunk"

/** include Api */
import {
    getProfileFromFirebaseApi,
    getAllProfilesFromFirebaseApi,
    setProfileToFirebaseApi,
    removeUserProfileFromFBApi,

    getApplicationsFromFireBaseApi,
    setApplicationToFirebaseApi,
    updateApplicationToFirebaseApi,
    removeApplicationFromFireBaseApi,

    getTicketsFromFirebaseApi,
    sendTicketToFirebaseApi,
    changeTicketStatusToFirebaseApi,
    removeUserTicketsFromFBApi,

    getProfileFromMongoDBApi,
    setProfileToMongoDBApi,
    getAllProfilesFromMongoDBApi,
    updateProfileFromMongoDBApi,
    deleteProfileFromMongoDBApi,

    setApplicationToMongoDBApi,
    getApplicationsFromMongoDBApi,
    updateApplicationToMongoDBApi,
    deleteApplicationToMongoDBApi,

    getUserTicketsFromMongoDBApi,
    sendTicketToMongoDBApi,
    changeTicketStatusToMongoDBApi,
    removeUserTicketsFromMongoDBApi,
} from '../api'

/** include reducers */
import { ProfileReducer } from '../store/profile';
import { TicketReducer } from '../store/tickets';
import { ApplicationReducer } from '../store/applications';

const rootReducers = combineReducers({
    profile: ProfileReducer,
    tickets: TicketReducer,
    applications: ApplicationReducer,
});

const api = {
    getProfileFromFirebaseApi,
    getAllProfilesFromFirebaseApi,
    setProfileToFirebaseApi,
    removeUserProfileFromFBApi,

    getApplicationsFromFireBaseApi,
    setApplicationToFirebaseApi,
    updateApplicationToFirebaseApi,
    removeApplicationFromFireBaseApi,

    getTicketsFromFirebaseApi,
    sendTicketToFirebaseApi,
    changeTicketStatusToFirebaseApi,
    removeUserTicketsFromFBApi,

    getProfileFromMongoDBApi,
    setProfileToMongoDBApi,
    getAllProfilesFromMongoDBApi,
    updateProfileFromMongoDBApi,
    deleteProfileFromMongoDBApi,

    setApplicationToMongoDBApi,
    getApplicationsFromMongoDBApi,
    updateApplicationToMongoDBApi,
    deleteApplicationToMongoDBApi,

    getUserTicketsFromMongoDBApi,
    sendTicketToMongoDBApi,
    changeTicketStatusToMongoDBApi,
    removeUserTicketsFromMongoDBApi,
}

export const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);