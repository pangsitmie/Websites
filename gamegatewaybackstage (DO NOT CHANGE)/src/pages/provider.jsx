import React, { createContext, useReducer } from "react";
import LoginSetting from './login.jsx'

let initialState = {
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        default:
            throw new Error();
    }
};

export const LoginSettingLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <LoginSetting />
        </ParentContext.Provider>
    );
};



