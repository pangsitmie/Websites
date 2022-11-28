import React, { createContext, useReducer } from "react";
import ServiceSetting from './index'

let initialState = {
    services: [],
    serviceGames: [],
    changedServiceGames: [],
    serviceData: {},
    serviceGamesPageInfo: 1,
    isEdit: false,
    search: '',
    deleteBtn: '',
    actionScene: '',
    serviceListsScene: '',
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_SERVICES":
            return { ...state, services: action.payload };
        case "PUT_SERVICEGAMES":
            return { ...state, serviceGames: action.payload };
        case "PUT_CHANGEDSERVICEGAMES":
            return { ...state, changedServiceGames: action.payload };
        case "PUT_SERVICEDATA":
            return { ...state, serviceData: action.payload };
        case "PUT_SERVICEGAMESPAGEINFO":
            return { ...state, serviceGamesPageInfo: action.payload };
        case "PUT_ISEDIT":
            return { ...state, isEdit: action.payload };
        case "PUT_SEARCH":
            return { ...state, search: action.payload };
        case "PUT_DELETEBTN":
            return { ...state, deleteBtn: action.payload };
        case "PUT_ACTIONSCENE":
            return { ...state, actionScene: action.payload };
        case "PUT_SERVICELISTSSCENE":
            return { ...state, serviceListsScene: action.payload };
        default:
            throw new Error();
    }
};

export const ServiceSettingLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <ServiceSetting />
        </ParentContext.Provider>
    );
};



