import React, { useContext } from "react";
import style from "./RecordLists.module.scss";
import { ParentContext, physicalMachineMarketings } from '../provider.jsx'

import SeatLists from "../SeatLists/SeatLists";

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
        physicalMachineMarketings[state.gameSerialId][state.seat].map(async value => {
            if (lists.length === 10) {
                pages.push(lists)
                lists = []
            }
            lists.push(value)
        })
        if (lists.length !== 0) pages.push(lists)
    }
    splitPage();

    let record_lists = [];

    record_lists.push(
        <div key={'title'} className={style.title}>
            <span>
                {language.machine + language.income}
            </span>
            <span>
                {language.machine + language.expenditure}
            </span>
            <span>
                {language.create + language.time}
            </span>
            <span>
            </span>
        </div>
    )
    
    if (pages.length > 0){
        pages[state.recordPageInfo - 1].map(async value => {
            if (state.search === '' || value.create.indexOf(state.search) !== -1) {
                record_lists.push(
                    <div key={'tag' + value.id} className={style.lists} id='lists'>
                        <span>
                            {value.income}
                        </span>
    
                        <span>
                            {value.expenditure}
                        </span>
    
                        <span>
                            {value.create}
                        </span>
                        
                        <span>
                        </span>
                    </div>
                )
            }
        })
    }

    const nextPage = (
        <button onClick={() => putProvider('PUT_RECORDPAGEINFO', state.recordPageInfo + 1)}>
            {language.nextPage}
        </button>
    )
    const backPage = (
        <button onClick={() => putProvider('PUT_RECORDPAGEINFO', state.recordPageInfo - 1)}>
            {language.backPage}
        </button>
    )

    record_lists.push(
        <div key='return' className={style.pages}>
            {state.recordPageInfo > 1 ? backPage : ''}
            {state.recordPageInfo < pages.length ? nextPage : ''} 
            <button onClick={async () => {
                putProvider('PUT_SEARCH', '')
                putProvider('PUT_RECORDPAGEINFO', 1)
                putProvider('PUT_MAINSCENE', <SeatLists />)
            }}>
                {language.back}
            </button>
        </div>
    )

    return (
        <div className={style.background}>
            {record_lists}
        </div>
    )

}