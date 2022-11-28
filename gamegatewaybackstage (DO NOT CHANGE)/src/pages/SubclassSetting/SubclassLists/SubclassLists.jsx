import React, { useContext } from "react";
import style from "./SubclassLists.module.scss";
import { ParentContext } from '../provider.jsx'
import EditSubclass from '../Action/editSubclass'
import SubclassGamesLists from '../SubclassGamesLists/SubclassGamesLists'
import DeleteConfirm from '../Action/deleteConfirm'
import * as ConnectApi from '../ConnectApi';

export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [state, dispatch] = useContext(ParentContext);
    const putProvider = (order, data) => {
        dispatch({
            type: order,
            payload: data
        });
    }
    let gameSubclass_lists = [];
    gameSubclass_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {language.subClass + language.name}
            </span>
            <span>
                {language.comment}
            </span>
        </div>
    )
    state.gameSubclass.map(async value => {
        if (state.search === '' || value.name.indexOf(state.search) !== -1) {
            gameSubclass_lists.push(
                <div key={'tag' + value.id} className={style.lists} id='lists'>
                    <span>
                        {value.name}
                    </span>
                    <span >
                        {value.comment ? value.comment : language.none}
                    </span>
                    <button
                        onClick={async () => {
                            putProvider('PUT_GAMESUBCLASSDATA', value)
                            putProvider('PUT_ACTIONSCENE', <EditSubclass />)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </button>
                    <button
                        onClick={async () => {
                            let result = await ConnectApi.get_gameSubclass_games(value.id)
                            if (result.status === '0x000') {
                                putProvider('PUT_GAMESUBCLASSGAMES', result.data)
                                putProvider('PUT_GAMESUBCLASSDATA', value)
                                putProvider('PUT_SEARCH', '')
                                putProvider('PUT_SUBCLASSLISTSSCENE', <SubclassGamesLists />)
                            } else alert(result.message || 'something error')
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M377.8,100.1C332.9,86.8,318.8,112,256,112s-76.9-25.3-121.8-11.9c-44.9,13.3-67.3,60.4-88.5,148.8  c-21.2,88.5-17.3,152.4,7.7,164.3c25,11.9,53.2-15.4,80.1-49.1C155.3,337.7,166.2,336,256,336c89.7,0,99,0.7,122.5,28.1  c26.9,33.7,55.1,61,80.1,49.1c25-11.9,28.9-75.8,7.7-164.3C445.1,160.5,422.6,113.5,377.8,100.1z M128.2,263.7  c-21.7,0-39.3-17.7-39.3-39.6c0-21.8,17.6-39.6,39.3-39.6c21.7,0,39.3,17.8,39.3,39.6S149.9,263.7,128.2,263.7z M309.7,243.6  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C329,234.9,320.4,243.6,309.7,243.6z M351.9,286  c-10.6,0-19.3-8.7-19.3-19.4c0-10.8,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,277.4,362.6,286,351.9,286z M351.9,201.1  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,192.4,362.6,201.1,351.9,201.1z   M394.2,243.6c-10.7,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.6,0,19.3,8.7,19.3,19.4  C413.5,234.9,404.9,243.6,394.2,243.6z" /></svg>
                    </button>
                    <button
                        onClick={async () => {
                            putProvider('PUT_DELETEBTN', async () => {
                                let result = await ConnectApi.delete_gameSubclass(value.id)
                                if (result.status === '0x000') {
                                    result = await ConnectApi.get_gameSubclass()
                                    if (result.status === '0x000') {
                                        putProvider('PUT_GAMESUBCLASS', result.data)
                                        putProvider('PUT_ACTIONSCENE', '')
                                    } else alert(result.message || 'something error')
                                } else alert(result.message || 'something error')
                            })
                            putProvider('PUT_ACTIONSCENE', <DeleteConfirm />)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div >
            )
        }
    })
    return (<div className={style.background}>
        {gameSubclass_lists}
    </div>)
}
