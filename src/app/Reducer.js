const initialState = {
    name: "",
    email: "",
    photo: "",
};

let UserActions = {
    USER_LOGIN: "USER_LOGIN",
    USER_SIGNOUT: "USER_SIGNOUT",
};


const reducer = (state, action) => {

    switch (action.type) {
        case UserActions.USER_LOGIN: {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo,
            }
        };
        case UserActions.USER_SIGNOUT: {
            return {
                ...state,
                name: null,
                email: null,
                photo: null,
            }
        }

    }
};

export {
    initialState,
    UserActions,
    reducer,
};