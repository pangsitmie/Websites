import React, { useContext } from "react";
import style from "./SeatLists.module.scss";
import { ParentContext, physicalMachineMarketings } from '../provider.jsx'

import GameLists from "../GameLists/GameLists";
import RecordLists from "../RecordLists/RecordLists";

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
    
    let pages = []
    const splitPage = () => {
        let lists = []
        for (let seat in physicalMachineMarketings[state.gameSerialId]) {
            if (lists.length === 10) {
                pages.push(lists)
                lists = []
            }
            lists.push(seat)
        }
        if (lists.length !== 0) pages.push(lists)
    }
    splitPage();

    let seat_lists = [];

    seat_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {language.seat}
            </span>
            <span>
                {language.operate}
            </span>
        </div>
    )
    
    if (pages.length > 0){
        pages[state.seatPageInfo - 1].map(async value => {
            if (state.search === '' || value.indexOf(state.search) !== -1) {
                seat_lists.push(
                    <div key={'tag' + value} className={style.lists} id='lists'>
                        <span>
                            {value}
                        </span>
                        
                        <span>
                            <button
                                onClick={async () => {
                                    putProvider('PUT_SEAT', value)
                                    putProvider('PUT_MAINSCENE', <RecordLists />)
                                }}
                            >
                                <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g><path d="m21.822.015c-.025-.002-.046-.015-.072-.015h-10.75c-1.654 0-3 1.346-3 3v1c0 .552.448 1 1 1s1-.448 1-1v-1c0-.551.449-1 1-1h4.659l-.305.102c-.81.28-1.354 1.043-1.354 1.898v15h-3c-.551 0-1-.449-1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 1.654 1.346 3 3 3h3v1c0 1.103.897 2 2 2 .214 0 .417-.031.637-.099l6.008-2.003c.811-.28 1.355-1.043 1.355-1.898v-18c0-1.166-1.005-2.08-2.178-1.985z" /><path d="m10.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z" /></g></svg>
                            </button>
                        </span>
                    </div>
                )
            }
        })
    }

    const nextPage = (
        <button onClick={() => putProvider('PUT_SEATPAGEINFO', state.seatPageInfo + 1)}>
            {language.nextPage}
        </button>
    )
    const backPage = (
        <button onClick={() => putProvider('PUT_SEATPAGEINFO', state.seatPageInfo - 1)}>
            {language.backPage}
        </button>
    )

    seat_lists.push(
        <div key='return' className={style.pages}>
            {state.seatPageInfo > 1 ? backPage : ''}
            {state.seatPageInfo < pages.length ? nextPage : ''} 
            <button onClick={async () => {
                putProvider('PUT_SEARCH', '')
                putProvider('PUT_SEATPAGEINFO', 1)
                putProvider('PUT_MAINSCENE', <GameLists />)
            }}>
                {language.back}
            </button>
        </div>
    )

    return (
        <div className={style.background}>
            {seat_lists}
        </div>
    )

}