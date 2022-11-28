import React, { useContext } from "react";
import style from "./SubclassGamesLists.module.scss";
import { ParentContext } from '../provider.jsx'
import SubclassLists from '../SubclassLists/SubclassLists'
import * as ConnectApi from '../ConnectApi';
import * as qs from 'querystring';

export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [state, dispatch] = useContext(ParentContext);
    let pages = []
    const putProvider = (order, data) => {
        dispatch({
            type: order,
            payload: data
        });
    }
    const splitPage = () => {
        let lists = []
        state.gameSubclassGames.map(async value => {
            if (lists.length === 10) {
                pages.push(lists)
                lists = []
            }
            lists.push(value)
        })
        if (lists.length !== 0) pages.push(lists)
    }
    splitPage();
    let gameSubclassGames_lists = [];
    gameSubclassGames_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {"ISP"}
            </span>
            <span>
                {language.serial + language.number}
            </span>
            <span>
                {language.name}
            </span>
            <span>
                {language.comment}
            </span>
            <span>
                {language.type}
            </span>
            <div onClick={() => { if (!state.isEdit) putProvider('PUT_ISEDIT', true) }}>
                <span>
                    {language.status}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
        </div>
    )
    pages[state.gameSubclassGamesPageInfo - 1].map(async value => {
        if (state.search === '' || value.name.indexOf(state.search) !== -1) {
            gameSubclassGames_lists.push(
                <div key={'tag' + value.serial_number} className={style.lists} id='lists'>
                    <span>
                        {value.third_party_isp.name}
                    </span>
                    <span>
                        {value.serial_number}
                    </span>
                    <span>
                        {value.name}
                    </span>
                    <span >
                        {value.comment ? value.comment : language.none}
                    </span>
                    <span>
                        {value.type}
                    </span>
                    <span id={'status' + value.id} style={{
                        color: value.enable ? 'var(--yes)' : 'var(--no)',
                        cursor: state.isEdit ? 'pointer' : 'default'
                    }} onClick={async () => {
                        if (state.isEdit) {
                            if (value.enable) {
                                state.gameSubclassGames.find(e => e.id === value.id).enable = false;
                                if (state.changedSubclassGames.find(e => e.id === value.id)) {
                                    state.changedSubclassGames.find(e => e.id === value.id).enable = false;
                                } else {
                                    state.changedSubclassGames.push({
                                        id: value.id,
                                        enable: false
                                    })
                                }
                            } else {
                                state.gameSubclassGames.find(e => e.id === value.id).enable = true;
                                if (state.changedSubclassGames.find(e => e.id === value.id)) {
                                    state.changedSubclassGames.find(e => e.id === value.id).enable = true;
                                } else {
                                    state.changedSubclassGames.push({
                                        id: value.id,
                                        enable: true
                                    })
                                }
                            }
                            putProvider('PUT_GAMESUBCLASSGAMES', state.gameSubclassGames)
                            putProvider('PUT_CHANGEDSUBCLASSGAMES', state.changedSubclassGames)
                            console.log(state.changedSubclassGames)
                        }
                    }}>
                        {value.enable ? language.enable : language.disable}
                    </span>
                </div >
            )
        }
    })
    const nextPage = (<button onClick={() => putProvider('PUT_GAMESUBCLASSGAMESPAGEINFO', state.gameSubclassGamesPageInfo + 1)}>
        {language.nextPage}
    </button>)
    const backPage = (<button onClick={() => putProvider('PUT_GAMESUBCLASSGAMESPAGEINFO', state.gameSubclassGamesPageInfo - 1)}>
        {language.backPage}
    </button>)
    gameSubclassGames_lists.push(
        <div key='return' className={style.pages}        >
            {state.gameSubclassGamesPageInfo > 1 ? backPage : ''}
            {state.gameSubclassGamesPageInfo !== pages.length ? nextPage : ''}
            <button onClick={async () => {
                putProvider('PUT_SEARCH', '')
                putProvider('PUT_ISEDIT', false)
                putProvider('PUT_SUBCLASSLISTSSCENE', <SubclassLists />)
            }}>
                {language.back}
            </button>
        </div>
    )
    if (state.isEdit) gameSubclassGames_lists.push(
        <div key='change' className={style.change}>
            <button onClick={async () => {
                let check = true
                let addDatas = []
                let deleteDatas = []
                state.changedSubclassGames.map(value => {
                    if (value.enable) addDatas.push(value.id); else deleteDatas.push(value.id);
                })
                let variables = {
                    gameIds: deleteDatas
                }
                let url = qs.stringify(variables)

                let result = []
                if (deleteDatas.length !== 0) result.push(await ConnectApi.delete_gameSubclass_games(state.gameSubclassData.id, url))
                if (addDatas.length !== 0) result.push(await ConnectApi.add_gameSubclass_games(state.gameSubclassData.id, { game_ids: addDatas }))
                result.map(value => {
                    check = value.status === '0x000' ? check && true : false
                })
                if (check) {
                    result = await ConnectApi.get_gameSubclass_games(state.gameSubclassData.id)
                    if (result.status === '0x000') {
                        state.changedSubclassGames = []
                        putProvider('PUT_CHANGEDSUBCLASSGAMES', state.changedSubclassGames)
                        putProvider('PUT_GAMESUBCLASSGAMES', result.data)
                        putProvider('PUT_ISEDIT', false)
                    } else alert(result.message || 'something error')
                } else alert(result.message || 'something error')
            }}>
                {language.approve + language.change}
            </button>
            <button onClick={async () => {
                let result = await ConnectApi.get_gameSubclass_games(state.gameSubclassData.id)
                if (result.status === '0x000') {
                    state.changedSubclassGames = []
                    putProvider('PUT_CHANGEDSUBCLASSGAMES', state.changedSubclassGames)
                    putProvider('PUT_GAMESUBCLASSGAMES', result.data)
                    putProvider('PUT_ISEDIT', false)
                } else alert(result.message || 'something error')
            }}>
                {language.cancel + language.change}
            </button>
        </div>
    )
    return (<div className={style.background}>
        {gameSubclassGames_lists}
    </div>)
}