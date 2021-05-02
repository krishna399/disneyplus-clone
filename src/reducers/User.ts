
import { StateAction } from "../types/appActions";
import { User } from "../types/User";

let UserActions = {
    USER_LOGIN: "USER_LOGIN",
    USER_SIGNOUT: "USER_SIGNOUT",
};

const userInitialState = {
    name: "",
    mail: "",
    photo: "",
}

const userReducer = (state = userInitialState, action: StateAction) => {

    switch (action.type) {
        case UserActions.USER_LOGIN: {
            return {
                ...state,
                name: action.payload.name,
                mail: action.payload.email,
                photo: action.payload.photo,
            }
        };
        case UserActions.USER_SIGNOUT: {
            return {
                ...state,
                name: '',
                mail: '',
                photo: '',
            }
        }
        default:
            return state;

    }
};

export {
    userInitialState,
    userReducer,
    UserActions,
}