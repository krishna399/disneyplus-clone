import React, { createContext, useContext, useReducer } from "react";
import { StateAction } from "../types/appActions";
import { ApplicationState } from "../types/appState";
import { initialState, rootReducer } from "./Reducer";

interface StaeProviderProps {
    children: any;
}
// Interface to define to state of the context object.
export interface IStateContext {
    state: ApplicationState;
    dispatch: (param: StateAction) => void;
}


//Prepare the dataLayer
export const StateContext = createContext({} as IStateContext);

//wrap the app and provide state to every component in app
export const StateProvider = (props: StaeProviderProps) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return (<StateContext.Provider value={{ state, dispatch }}>
        {props.children}
    </StateContext.Provider>
    );
};

//To Pull information from the state
export const useStateValue = () => useContext(StateContext);