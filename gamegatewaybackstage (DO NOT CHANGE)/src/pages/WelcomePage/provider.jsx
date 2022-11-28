import React, { createContext, useReducer } from "react";
import WelcomePage from './index'

let initialState = {
    search: '',
    actionScene: '',
    mainScene: '',
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_SEARCH":
            return { ...state, search: action.payload };
        case "PUT_ACTIONSCENE":
            return { ...state, actionScene: action.payload };
        case "PUT_MAINSCENE":
            return { ...state, mainScene: action.payload };
        default:
            throw new Error();
    }
};

export const WelcomePageLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <WelcomePage />
        </ParentContext.Provider>
    );
};



