import React, { useState, useContext, useEffect, useCallback } from "react";
import style from "./ServiceSetting.module.scss";
import { ParentContext } from './provider.jsx'
import ServiceLists from './ServiceLists/ServiceLists'
import AddService from './Action/addService'
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
        const getServices = async () => {
            let result = await ConnectApi.get_service()
            if (result.status === '0x000') {
                putProvider('PUT_SERVICES', result.data)
                putProvider('PUT_SERVICELISTSSCENE', <ServiceLists />)
            } else alert(result.message || 'something error')
        }
        getServices()
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
                        <Content._title key='title' title={language.service + language.manage} />,
                        <Content.searchFrame key='searchFrame' body={[
                            <Content.search_txt
                                key='search_txt'
                                placeholder={language.pleaseEnter + language.name}
                                width='150px'
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
                                onClick={() => putProvider('PUT_ACTIONSCENE', <AddService />)}
                            />
                        ]} />,
                        < div className={style.background} key='content' >
                            {state.actionScene}
                            {state.serviceListsScene}
                        </div >
                    ]
                }
            />)
        }
        rendering()
    }, [dispatch, state.isEdit, state.serviceListsScene, state.serviceGames, state.actionScene, language.name, language.service, language.search, language.add, language.pleaseEnter, language.manage])
    //rerender
    useEffect(() => {
        render()
    }, [render])
    return layout
}
