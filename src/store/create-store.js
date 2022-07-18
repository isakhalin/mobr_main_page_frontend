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
    setApplicationToFirebaseApi,
    getApplicationsFromFireBaseApi,
    sendTicketToFirebaseApi,
    getTicketsFromFirebaseApi,
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
    setApplicationToFirebaseApi,
    getApplicationsFromFireBaseApi,
    sendTicketToFirebaseApi,
    getTicketsFromFirebaseApi,
}

export const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);