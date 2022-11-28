import React, { useEffect, useState, useContext, useCallback } from "react";
import { ParentContext } from '../provider.jsx'
import style from './editService.module.scss';
import Inputfield from '../../../lib/sampleelement/Inputfield';
import * as ConnectApi from '../ConnectApi';

let editServiceData = {}
export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const [_error_map, set_error_map] = useState(new Map())
    const [layout, setLayout] = useState(<div />)
    const [state, dispatch] = useContext(ParentContext);
    //getData(Once)
    useEffect(() => {
        editServiceData = JSON.parse(JSON.stringify(state.serviceData))
        delete editServiceData.id
        delete editServiceData.token
        delete editServiceData.enable
    }, [state.serviceData])
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
            //主機位址驗證
            if (!data.host) {
                check = false;
                _error_map.set('host', '請輸入主機位址')
            }
            set_error_map(new Map(_error_map))
            return check
        }
        const reset = () => {
            editServiceData = {}
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
                        <Inputfield title={language.name} inputfieldWidth='140px' defaultValue={editServiceData.name} onChange={e => editServiceData.name = e} error={_error_map.get('name')} />
                        <Inputfield title={language.comment} inputfieldWidth='200px' defaultValue={editServiceData.comment} onChange={e => editServiceData.comment = e} error={_error_map.get('comment')} />
                        <Inputfield title={language.host} inputfieldWidth='370px' defaultValue={editServiceData.host} onChange={e => editServiceData.host = e} error={_error_map.get('host')} />
                        <Inputfield title={language.currency + language.name} inputfieldWidth='140px' defaultValue={editServiceData.wallet.currency.name} isReadOnly={true} />
                        <Inputfield title={language.currency + language.comment} inputfieldWidth='200px' defaultValue={editServiceData.wallet.currency.comment} isReadOnly={true} />
                        <Inputfield title={language.wallet + language.address} inputfieldWidth='500px' defaultValue={editServiceData.wallet.wallet_address} isReadOnly={true} />
                    </div>
                    <div className={style.button}>
                        <button onClick={async () => {
                            let data = Object.assign({}, editServiceData)
                            delete data.wallet
                            if (checkData(data)) {
                                let result = await ConnectApi.update_service(state.serviceData.id, data)
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
    }, [dispatch, _error_map, language.name, language.update, state.serviceData.id, language.service, language.back, language.comment])
    useEffect(() => {
        render()
    }, [render])
    return (layout);
}