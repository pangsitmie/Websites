import React, { useState, useContext, useEffect, useCallback } from "react";
import style from "./MachineIncome.module.scss";
import { ParentContext } from './provider.jsx'
import GameLists from './GameLists/GameLists'
import * as Content from '../../item/Content'
import * as ConnectApi from './ConnectApi';

let searchTxt = ''

export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [layout, setLayout] = useState(<div />);
    const [state, dispatch] = useContext(ParentContext);

    //getData(Once)
    useEffect(() => {
        const putProvider = (order, data) => {
            dispatch({
                type: order,
                payload: data
            });
        }

        putProvider('PUT_MAINSCENE', <GameLists />)

    }, [dispatch])
    
    const render = useCallback(() => {
        const putProvider = (order, data) => {
            dispatch({
                type: order,
                payload: data
            });
        }

        const rendering = () => {
            setLayout(<Content.body
                body={
                    [
                        <Content._title key='title' title={language.machine + language.income} />,

                        <Content.searchFrame key='searchFrame' body={[
                        ]} />,
                        
                        < div className={style.background} key='content' >
                            {state.actionScene}
                            {state.mainScene}
                        </div >
                    ]
                }
            />)
        }

        rendering()

    }, [dispatch, language.pleaseEnter, language.name, language.search, state.actionScene, state.mainScene])

    //rerender
    useEffect(() => {
        render()
    }, [render])

    return layout
}
