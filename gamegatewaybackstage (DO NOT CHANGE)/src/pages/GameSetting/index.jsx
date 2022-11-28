import React, { useState, useContext, useEffect, useCallback } from "react";
import style from "./GameSetting.module.scss";
import { ParentContext } from './provider.jsx'
import ISPLists from './ISPLists/ISPLists'
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
        const getISPs = async () => {
            let result = await ConnectApi.get_ISP()
            if (result.status === '0x000') {
                putProvider('PUT_ISPS', result.data)
                putProvider('PUT_GAMELISTSSCENE', <ISPLists />)
            } else alert(result.message || 'something error')
        }
        getISPs()
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
                        <Content._title key='title' title={language.game + language.manage} />,
                        <Content.searchFrame key='searchFrame' body={[
                            <Content.search_txt
                                key='search_txt'
                                placeholder={language.pleaseEnter + language.name}
                                //defaultValue={searchTxt}
                                onChange={e => searchTxt = e.target.value}
                                onKeyPress={e => { if (e.nativeEvent.keyCode === 13) putProvider('PUT_SEARCH', searchTxt) }}
                            />,
                            <Content.button
                                key='search'
                                text={language.search}
                                onClick={() => putProvider('PUT_SEARCH', searchTxt)}
                            />
                        ]} />,
                        < div className={style.background} key='content' >
                            {state.actionScene}
                            {state.gameListsScene}
                        </div >
                    ]
                }
            />)
        }
        rendering()
    }, [dispatch, state.gameListsScene, state.actionScene, language.name, language.game, language.search, language.pleaseEnter, language.manage])
    //rerender
    useEffect(() => {
        render()
    }, [render])
    return layout
}
