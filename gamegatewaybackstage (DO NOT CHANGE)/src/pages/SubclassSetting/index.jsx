import React, { useState, useContext, useEffect, useCallback } from "react";
import style from "./SubclassSetting.module.scss";
import { ParentContext } from './provider.jsx'
import SubclassLists from './SubclassLists/SubclassLists'
import AddSubclass from './Action/addSubclass'
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
        const getGameSubclass = async () => {
            let result = await ConnectApi.get_gameSubclass()
            if (result.status === '0x000') {
                putProvider('PUT_GAMESUBCLASS', result.data)
                putProvider('PUT_SUBCLASSLISTSSCENE', <SubclassLists />)
            } else alert(result.message || 'something error')
        }
        getGameSubclass()
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
                        <Content._title key='title' title={language.subClass + language.manage} />,
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
                            />,
                            <Content.button
                                key='add'
                                text={language.add}
                                onClick={() => putProvider('PUT_ACTIONSCENE', <AddSubclass />)}
                            />
                        ]} />,
                        < div className={style.background} key='content' >
                            {state.actionScene}
                            {state.subclassListsScene}
                        </div >
                    ]
                }
            />)
        }
        rendering()
    }, [dispatch, state.subclassListsScene, state.actionScene, language.name, language.game, language.search, language.pleaseEnter, language.manage])
    //rerender
    useEffect(() => {
        render()
    }, [render])
    return layout
}
