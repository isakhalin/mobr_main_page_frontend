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
    sendTicketToFirebaseApi,
    getTicketsFromFirebaseApi,
} from '../api'

/** include reducers */
import {ProfileReducer} from '../store/profile';
import {TicketReducer} from '../store/tickets'

const rootReducers = combineReducers({
    profile: ProfileReducer,
    tickets: TicketReducer,
});

const api = {
    getProfileFromFirebaseApi,
    setApplicationToFirebaseApi,
    sendTicketToFirebaseApi,
    getTicketsFromFirebaseApi,
}

export const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);