import React, { useContext } from "react";
import style from "./ISPGameLists.module.scss";
import { ParentContext } from '../provider.jsx'
import ISPLists from '../ISPLists/ISPLists'
import * as ConnectApi from '../ConnectApi';

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
        state.ISPGames.map(async value => {
            if (lists.length === 10) {
                pages.push(lists)
                lists = []
            }
            lists.push(value)
        })
        if (lists.length !== 0) pages.push(lists)
    }
    splitPage();
    let ISPGame_lists = [];
    ISPGame_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {language.serial + language.number}
            </span>
            <span>
                {language.name}
            </span>
            <span>
                {language.comment}
            </span>
        </div>
    )
    pages[state.ISPGamesPageInfo - 1].map(async value => {
        if (state.search === '' || value.name.indexOf(state.search) !== -1) {
            ISPGame_lists.push(
                <div key={'tag' + value.serial_number} className={style.lists} id='lists'>
                    <span>
                        {value.serial_number}
                    </span>
                    <span>
                        {value.name}
                    </span>
                    <span >
                        {value.comment ? value.comment : language.none}
                    </span>
                </div >
            )
        }
    })
    const nextPage = (<button onClick={() => putProvider('PUT_ISPGAMESPAGEINFO', state.ISPGamesPageInfo + 1)}>
        {language.nextPage}
    </button>)
    const backPage = (<button onClick={() => putProvider('PUT_ISPGAMESPAGEINFO', state.ISPGamesPageInfo - 1)}>
        {language.backPage}
    </button>)
    ISPGame_lists.push(
        <div key='return' className={style.pages}        >
            {state.ISPGamesPageInfo > 1 ? backPage : ''}
            {state.ISPGamesPageInfo !== pages.length ? nextPage : ''}
            <button onClick={async () => {
                putProvider('PUT_SEARCH', '')
                putProvider('PUT_GAMELISTSSCENE', <ISPLists />)
            }}>
                {language.back}
            </button>
        </div>
    )
    return (<div className={style.background}>
        {ISPGame_lists}
    </div>)
}