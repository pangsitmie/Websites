import React, { createContext, useReducer } from "react";
import SubclassSetting from './index'

let initialState = {
    gameSubclass: [],
    gameSubclassGames: [],
    changedSubclassGames: [],
    gameSubclassData: {},
    gameSubclassGamesPageInfo: 1,
    isEdit: false,
    search: '',
    deleteBtn: '',
    actionScene: '',
    subclassListsScene: '',
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_GAMESUBCLASS":
            return { ...state, gameSubclass: action.payload };
        case "PUT_GAMESUBCLASSGAMES":
            return { ...state, gameSubclassGames: action.payload };
        case "PUT_CHANGEDSUBCLASSGAMES":
            return { ...state, changedSubclassGames: action.payload };
        case "PUT_GAMESUBCLASSDATA":
            return { ...state, gameSubclassData: action.payload };
        case "PUT_GAMESUBCLASSGAMESPAGEINFO":
            return { ...state, gameSubclassGamesPageInfo: action.payload };
        case "PUT_ISEDIT":
            return { ...state, isEdit: action.payload };
        case "PUT_SEARCH":
            return { ...state, search: action.payload };
        case "PUT_DELETEBTN":
            return { ...state, deleteBtn: action.payload };
        case "PUT_ACTIONSCENE":
            return { ...state, actionScene: action.payload };
        case "PUT_SUBCLASSLISTSSCENE":
            return { ...state, subclassListsScene: action.payload };
        default:
            throw new Error();
    }
};

export const SubclassLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <SubclassSetting />
        </ParentContext.Provider>
    );
};



