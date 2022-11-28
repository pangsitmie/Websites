import React, { createContext, useReducer } from "react";
import GameSetting from './index'

let initialState = {
    gatewayGames: [],
    ISPGames: [],
    ISPs: [],
    ISPGameData: {},
    search: '',
    ISPGamesPageInfo: 1,
    actionScene: '',
    gameListsScene: '',
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_GATEWAYGAMES":
            return { ...state, gatewayGames: action.payload };
        case "PUT_ISPGAMES":
            return { ...state, ISPGames: action.payload };
        case "PUT_ISPS":
            return { ...state, ISPs: action.payload };
        case "PUT_ISPGAMESPAGEINFO":
            return { ...state, ISPGamesPageInfo: action.payload };
        case "PUT_ISPGAMEDATA":
            return { ...state, ISPGameData: action.payload };
        case "PUT_SEARCH":
            return { ...state, search: action.payload };
        case "PUT_ACTIONSCENE":
            return { ...state, actionScene: action.payload };
        case "PUT_GAMELISTSSCENE":
            return { ...state, gameListsScene: action.payload };
        default:
            throw new Error();
    }
};

export const GameSettingLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <GameSetting />
        </ParentContext.Provider>
    );
};



