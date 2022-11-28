import React, { createContext, useReducer } from "react";
import TitleSetting from './index'

let initialState = {
    selectOption: '',
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_SELECTOPTION":
            return { ...state, selectOption: action.payload };
        default:
            throw new Error();
    }
};

export const TitleSettingLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <TitleSetting />
        </ParentContext.Provider>
    );
};



