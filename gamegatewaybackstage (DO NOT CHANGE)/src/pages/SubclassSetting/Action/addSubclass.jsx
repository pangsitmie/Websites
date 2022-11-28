import React, { useEffect, useState, useContext, useCallback } from "react";
import { ParentContext } from '../provider.jsx'
import style from './addSubclass.module.scss';
import Inputfield from '../../../lib/sampleelement/Inputfield';
import * as ConnectApi from '../ConnectApi';

let addSubclassData = {}
export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [_error_map, set_error_map] = useState(new Map())
    const [layout, setLayout] = useState(<div />)
    const [, dispatch] = useContext(ParentContext);
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
            addSubclassData = {}
        };
        const rendering = () => {
            setLayout(<div className={style.mask}>
                <div onClick={() => {putProvider('PUT_ACTIONSCENE', '');reset();}}></div> 
                <div className={style.background}>
                    <div className={style.title}>
                        <span>
                            {language.add + language.service}
                        </span>
                    </div>
                    <div className={style.content}>
                        <Inputfield title={language.subClass + language.name} isRequired={true} onChange={e => addSubclassData.name = e} error={_error_map.get('name')} />
                        <Inputfield title={language.comment} onChange={e => addSubclassData.comment = e} error={_error_map.get('comment')} />
                    </div>
                    <div className={style.button}>
                        <button onClick={async () => {
                            if (checkData(addSubclassData)) {
                                let result = await ConnectApi.add_gameSubclass(addSubclassData)
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
                            {language.add}
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
    }, [dispatch, _error_map, language.name, language.service, language.add, language.back, language.comment])
    useEffect(() => {
        render()
    }, [render])
    return (layout);
}