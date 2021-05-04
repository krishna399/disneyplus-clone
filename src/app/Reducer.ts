import { ApplicationState } from "../types/appState";
import {
    userReducer,
    userInitialState,
    movieDetailsReducer,
    movieDetailsInitialState
} from "../reducers/index";
import { combineReducers } from "@reduxjs/toolkit";

let initialState: ApplicationState = {
    user: { ...userInitialState },
    movieDetails: { ...movieDetailsInitialState },
};


const rootReducer = combineReducers({
    user: userReducer,
    movieDetails: movieDetailsReducer,
});


export {
    initialState,
    rootReducer,
};