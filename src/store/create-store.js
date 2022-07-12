import React from "react";
import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux"

import thunk from "redux-thunk"

/** include Api */
import {getProfileFromFirebaseApi} from '../api'

/** include reducers */
import {ProfileReducer} from '../store/profile'

const rootReducers = combineReducers({
    profile: ProfileReducer,
});

const api = {
    getProfileFromFirebaseApi
}

export const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);