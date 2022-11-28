import React, { useState, useContext, useEffect, useCallback } from "react";
import style from "./WelcomePage.module.scss";
import { ParentContext } from './provider.jsx'
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
                        <Content._title key='title' title={'歡迎使用【' + language.backstage + '】＆ 請使用Menu來切換頁面'} />,

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
