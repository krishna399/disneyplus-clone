
import { StateAction } from "../types/appActions";

let MovieDetailsActions = {
    SET_MOVIE: "SET_MOVIE",
};

const movieDetailsInitialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
}

const movieDetailsReducer = (state = movieDetailsInitialState, action: StateAction) => {

    switch (action.type) {
        case MovieDetailsActions.SET_MOVIE: {
            return {
                ...state,
                recommend: action.payload.recommend,
                newDisney: action.payload.newDisney,
                original: action.payload.original,
                trending: action.payload.trending,

            };
        }
        default:
            return state;

    }
};

export {
    movieDetailsInitialState,
    movieDetailsReducer,
    MovieDetailsActions,
}