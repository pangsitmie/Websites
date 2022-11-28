import React, { useContext } from "react";
import style from "./ISPLists.module.scss";
import { ParentContext } from '../provider.jsx'
import ISPGameLists from '../ISPGameLists/ISPGameLists'
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
    let ISP_lists = [];
    ISP_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {'ISP' + language.name}
            </span>
            <span>
                {language.comment}
            </span>
        </div>
    )
    state.ISPs.map(async value => {
        if (state.search === '' || value.name.indexOf(state.search) !== -1) {
            ISP_lists.push(
                <div key={'tag' + value.id} className={style.lists} id='lists'>
                    <span>
                        {value.name}
                    </span>
                    <span >
                        {value.comment ? value.comment : language.none}
                    </span>
                    <button
                        onClick={async () => {
                            let result = await ConnectApi.get_ISPGame(value.id)
                            if (result.status === '0x000') {
                                putProvider('PUT_ISPGAMES', result.data)
                                putProvider('PUT_SEARCH', '')
                                putProvider('PUT_GAMELISTSSCENE', <ISPGameLists />)
                            } else alert(result.message || 'something error')
                        }}
                    >
                        <svg viewBox="0 0 24 24" height="18" width="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="m21.822.015c-.025-.002-.046-.015-.072-.015h-10.75c-1.654 0-3 1.346-3 3v1c0 .552.448 1 1 1s1-.448 1-1v-1c0-.551.449-1 1-1h4.659l-.305.102c-.81.28-1.354 1.043-1.354 1.898v15h-3c-.551 0-1-.449-1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 1.654 1.346 3 3 3h3v1c0 1.103.897 2 2 2 .214 0 .417-.031.637-.099l6.008-2.003c.811-.28 1.355-1.043 1.355-1.898v-18c0-1.166-1.005-2.08-2.178-1.985z" /><path d="m10.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z" /></g></svg>
                    </button>
                </div >
            )
        }
    })
    return (<div className={style.background}>
        {ISP_lists}
    </div>)
}
