import React, { useEffect, useState, useContext, useCallback } from "react";
import { ParentContext } from '../provider.jsx'
import style from './editSubclass.module.scss';
import Inputfield from '../../../lib/sampleelement/Inputfield';
import * as ConnectApi from '../ConnectApi';

let editSubclassData = {}
export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [_error_map, set_error_map] = useState(new Map())
    const [layout, setLayout] = useState(<div />)
    const [state, dispatch] = useContext(ParentContext);
    //getData(Once)
    useEffect(() => {
        editSubclassData = JSON.parse(JSON.stringify(state.gameSubclassData))
        delete editSubclassData.id
    }, [state.gameSubclassData])
    const render = useCallback(() => {
        const putProvider = (order, data) => {
            dispatch({
                type: order,
                payload: data
            });
        }
        const checkData = (data) => {
            _error_map.clear()
            let check = true;
            //名稱驗證
            if (!data.name) {
                check = false;
                _error_map.set('name', '請輸入名稱')
            }
            set_error_map(new Map(_error_map))
            return check
        }
        const reset = () => {
            editSubclassData = {}
        };
        const rendering = () => {
            setLayout(<div className={style.mask}>
                <div onClick={() => {putProvider('PUT_ACTIONSCENE', '');reset();}}></div> 
                <div className={style.background}>
                    <div className={style.title}>
                        <span>
                            {language.update + language.service}
                        </span>
                    </div>
                    <div className={style.content}>
                        <Inputfield title={language.name} defaultValue={editSubclassData.name} onChange={e => editSubclassData.name = e} error={_error_map.get('comment')} />
                        <Inputfield title={language.comment} defaultValue={editSubclassData.comment} onChange={e => editSubclassData.comment = e} error={_error_map.get('comment')} />
                    </div>
                    <div className={style.button}>
                        <button onClick={async () => {
                            if (checkData(editSubclassData)) {
                                let result = await ConnectApi.update_gameSubclass(state.gameSubclassData.id, editSubclassData)
                                if (result.status === '0x000') {
                                    result = await ConnectApi.get_gameSubclass()
                                    if (result.status === '0x000') {
                                        putProvider('PUT_GAMESUBCLASS', result.data)
                                        putProvider('PUT_ACTIONSCENE', '')
                                        reset();
                                    } else alert(result.message || 'something error')
                                } else alert(result.message || 'something error')
                            }
                        }}>
                            {language.update}
                        </button>
                        <button onClick={() => {
                            putProvider('PUT_ACTIONSCENE', '')
                            reset();
                        }}>
                            {language.back}
                        </button>
                    </div>
                </div>
            </div >)
        }
        rendering()
    }, [dispatch, _error_map, language.name, language.update, state.gameSubclassData.id, language.service, language.back, language.comment])
    useEffect(() => {
        render()
    }, [render])
    return (layout);
}