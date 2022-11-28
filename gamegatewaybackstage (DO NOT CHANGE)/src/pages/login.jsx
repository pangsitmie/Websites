import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import style from "./login.module.scss";
import Inputfield from '../lib/sampleelement/Inputfield'
import * as ConnectApi from './ConnectApi';
import * as Chinese from '../tools/Chinese.json';

let loginData = {}
export default () => {
    const [_error_map, set_error_map] = useState(new Map())
    const [layout, setLayout] = useState(<div />)
    const render = useCallback(() => {
        const checkData = (data) => {
            _error_map.clear()
            let check = true;
            if (!data.account) {
                check = false
                _error_map.set('account', '請輸入電話號碼')
            }
            if (!data.password) {
                check = false
                _error_map.set('password', '請輸入驗證碼')
            }
            set_error_map(new Map(_error_map))
            return check
        }
        const Login = () => {
            let history = useHistory()
            return (<button onClick={async () => {
                if (checkData(loginData)) {
                    let result = await ConnectApi.login(loginData)
                    if (result.status === '0x000') {
                        localStorage.setItem('gameGateway_language', JSON.stringify(Chinese))
                        localStorage.setItem('gameGatewayManagerData', JSON.stringify({ account: loginData.account }))
                        localStorage.setItem('gameGatewayToken', result.data.token)
                        history.push(`${process.env.PUBLIC_URL}/WelcomePageLayout`)
                    } else alert(result.message || 'something error')
                }
            }}>
                <span>
                    登入
                </span>
            </button>)
        }
        const rendering = () => {
            setLayout(<div className={style.background}>
                <span>
                    遊戲串接後台
                </span>
                <Inputfield title='帳號' isRequired={true} onChange={e => loginData.account = e} error={_error_map.get('account')} />
                <Inputfield title='密碼' isRequired={true} onChange={e => loginData.password = e} error={_error_map.get('password')} inputType='password' />
                <Login />
            </div>)
        }
        rendering()
    }, [_error_map])
    useEffect(() => {
        render()
    }, [render])
    return layout
}
