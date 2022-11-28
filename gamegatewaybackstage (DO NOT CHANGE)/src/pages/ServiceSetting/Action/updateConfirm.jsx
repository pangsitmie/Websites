import React, { useEffect, useState, useContext, useCallback } from "react";
import { ParentContext } from '../provider.jsx'
import style from './updateConfirm.module.scss';

export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [layout, setLayout] = useState(<div />)
    const [state, dispatch] = useContext(ParentContext);
    const render = useCallback(() => {
        const putProvider = (order, data) => {
            dispatch({
                type: order,
                payload: data
            });
        }
        const rendering = () => {
            setLayout(<div className={style.mask}>
                <div onClick={() => {putProvider('PUT_ACTIONSCENE', '')}}></div> 
                <div className={style.background}>
                    <div className={style.content}>
                        <span>
                            {language.doYouSureTo + language.update + 'token?'}
                        </span>
                    </div>
                    <div className={style.button}>
                        <button onClick={() => {
                            state.deleteBtn()
                            putProvider('PUT_ACTIONSCENE', '')
                        }}>
                            {language.update}
                        </button>
                        <button onClick={() => {
                            putProvider('PUT_ACTIONSCENE', '')
                        }}>
                            {language.no}
                        </button>
                    </div>
                </div>
            </div >)
        }
        rendering()
    }, [dispatch, language.update, language.doyouSureTo, language.no, state])
    useEffect(() => {
        render()
    }, [render])
    return (layout);
}