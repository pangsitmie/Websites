import React, { useEffect, useState, useContext, useCallback } from "react";
import { ParentContext } from '../provider.jsx'
import style from './addService.module.scss';
import Inputfield from '../../../lib/sampleelement/Inputfield';
import * as ConnectApi from '../ConnectApi';

let addServiceData = {
    service: {},
    currency: {}
}
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
            if (!data.service.name) {
                check = false;
                _error_map.set('name', '請輸入名稱')
            }
            //主機位址驗證
            if (!data.service.host) {
                check = false;
                _error_map.set('host', '請輸入主機位址')
            }
            //貨幣名稱驗證
            if (!data.currency.name) {
                check = false;
                _error_map.set('currencyName', '請輸入貨幣名稱')
            }
            set_error_map(new Map(_error_map))
            return check
        }
        const reset = () => {
            addServiceData = {
                service: {},
                currency: {}
            }
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
                        <Inputfield title={language.name} inputfieldWidth='140px' isRequired={true} onChange={e => addServiceData.service.name = e} error={_error_map.get('name')} />
                        <Inputfield title={language.comment} inputfieldWidth='200px' onChange={e => addServiceData.service.comment = e} error={_error_map.get('comment')} />
                        <Inputfield title={language.host} inputfieldWidth='370px' isRequired={true} onChange={e => addServiceData.service.host = e} error={_error_map.get('host')} />
                        <Inputfield title={language.currency + language.name} inputfieldWidth='140px' isRequired={true} onChange={e => addServiceData.currency.name = e} error={_error_map.get('currencyName')} />
                        <Inputfield title={language.currency + language.comment} inputfieldWidth='200px' onChange={e => addServiceData.currency.comment = e} error={_error_map.get('currencyComment')} />
                    </div>
                    <div className={style.button}>
                        <button onClick={async () => {
                            if (checkData(addServiceData)) {
                                let result = await ConnectApi.add_service(addServiceData)
                                if (result.status === '0x000') {
                                    result = await ConnectApi.get_service()
                                    if (result.status === '0x000') {
                                        putProvider('PUT_SERVICES', result.data)
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