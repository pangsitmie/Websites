import React, { useState, useContext, useEffect, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { ParentContext } from './provider.jsx'
import style from "./title.module.scss";
import { Link } from "react-router-dom";
import * as Chinese from '../../tools/Chinese.json';
import * as English from '../../tools/English.json';
import * as Indonesian from '../../tools/Indonesian.json';
import * as Language from '../../tools/language.json';
import * as ConnectApi from './ConnectApi'

export default () => {
    const language = JSON.parse(localStorage.getItem('gameGateway_language')).default
    const userData = JSON.parse(localStorage.getItem('gameGatewayManagerData'))
    const [layout, setLayout] = useState(<div />);
    const [isShowLanguage, setIsShowLanguage] = useState(false);
    const [isShowList, setIsShowList] = useState(false);
    const [state, dispatch] = useContext(ParentContext);
    const render = useCallback(() => {
        const MenuOption = ({ id, url, svg, title }) => {
            let history = useHistory()
            let lists = []
            lists.push(<input type='radio' key={'menuInput' + id} name='menu_radio' id={id} />)
            lists.push(
                <label htmlFor={id} key={'menuLabel' + id}
                    style={state.selectOption === id ? { borderLeft: '5px solid #ffffff', backgroundColor: '#ffffff75', } : {}}
                    onClick={() => {
                        dispatch({
                            type: "PUT_SELECTOPTION",
                            payload: id
                        });
                        history.push(`${process.env.PUBLIC_URL}` + url)
                    }} >
                    <div style={state.selectOption === id ? { color: '#ffffff', } : {}}>
                        {svg}
                        <span style={state.selectOption === id ? { color: '#ffffff', } : {}}>
                            {title}
                        </span>
                    </div>
                </label>)
            return lists
        }
        const Logout = () => {
            let history = useHistory()
            return (<button onClick={async () => {
                let result = await ConnectApi.logout()
                if (result.status === '0x000') {
                    localStorage.clear()
                    history.push(`${process.env.PUBLIC_URL}/`)
                } else alert(result.message)
            }}>
                <span>
                    {language.logout}
                </span>
            </button>)
        }
        const rendering = () => {
            let lists = []
            let languageJson = {
                Chinese: Chinese,
                English: English,
                Indonesian: Indonesian,
            }
            for (let data of Language.default.find(e => e.language === language.language).languageLists) {
                lists.push(
                    <button key={'language' + data.name} onClick={() => {
                        setIsShowLanguage(false);
                        localStorage.setItem('gameGateway_language', JSON.stringify(languageJson[data.code]));
                    }}>
                        {data.name}
                    </button >
                )
            }
            setLayout(<div className={style.background}>
                <div className={style.title}>
                    <span>{language.backstage}</span>
                </div>

                <div className={style.user}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>
                        {userData.account}
                    </span>
                </div>
                <div className={style.menu}>
                    <span>
                        Menu
                    </span>
                    <MenuOption id='game' url='/GameSettingLayout' title={language.game + language.manage}
                        svg={<svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M377.8,100.1C332.9,86.8,318.8,112,256,112s-76.9-25.3-121.8-11.9c-44.9,13.3-67.3,60.4-88.5,148.8  c-21.2,88.5-17.3,152.4,7.7,164.3c25,11.9,53.2-15.4,80.1-49.1C155.3,337.7,166.2,336,256,336c89.7,0,99,0.7,122.5,28.1  c26.9,33.7,55.1,61,80.1,49.1c25-11.9,28.9-75.8,7.7-164.3C445.1,160.5,422.6,113.5,377.8,100.1z M128.2,263.7  c-21.7,0-39.3-17.7-39.3-39.6c0-21.8,17.6-39.6,39.3-39.6c21.7,0,39.3,17.8,39.3,39.6S149.9,263.7,128.2,263.7z M309.7,243.6  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C329,234.9,320.4,243.6,309.7,243.6z M351.9,286  c-10.6,0-19.3-8.7-19.3-19.4c0-10.8,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,277.4,362.6,286,351.9,286z M351.9,201.1  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,192.4,362.6,201.1,351.9,201.1z   M394.2,243.6c-10.7,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.6,0,19.3,8.7,19.3,19.4  C413.5,234.9,404.9,243.6,394.2,243.6z" /></svg>}
                    />

                    <MenuOption id='subclass' url='/SubclassLayout' title={language.subClass + language.manage}
                        svg={<svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z" /></svg>}
                    />

                    <MenuOption id='service' url='/ServiceSettingLayout' title={language.service + language.manage}
                        svg={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title /><path d="M13,7.06V5H11V7.06A9,9,0,0,0,3.06,15H2v2H22V15H20.94A9,9,0,0,0,13,7.06Z" /></svg>}
                    />

                    <MenuOption id='machineIncome' url='/MachineIncomeLayout' title={language.machine + language.income}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/></svg>}
                    />

                </div>
                <div className={style.tool}>
                    <Logout />
                </div>

                <div className={style.language}>
                    <button onClick={() => setIsShowLanguage(!isShowLanguage)}>
                        <span>
                            {Language.default.find(e => e.language === language.language).languageName}
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    {isShowLanguage ?
                        <div className={style.language_list}>
                            {lists}
                        </div>
                        :
                        ''
                    }
                </div>

                <span className={style.version}>
                    v1.0.0
                </span>

                <div className={style.hamburger}>
                    <button onClick={() => setIsShowList(!isShowList)}>
                        <svg height="20px" viewBox="0 0 32 32" width="20px" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
                    </button>
                    {isShowList ?
                        <div className={style.hamburger_list}>
                            <Link to={process.env.PUBLIC_URL + '/GameSettingLayout'} onClick={() => setIsShowList(false)}>
                                <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M377.8,100.1C332.9,86.8,318.8,112,256,112s-76.9-25.3-121.8-11.9c-44.9,13.3-67.3,60.4-88.5,148.8  c-21.2,88.5-17.3,152.4,7.7,164.3c25,11.9,53.2-15.4,80.1-49.1C155.3,337.7,166.2,336,256,336c89.7,0,99,0.7,122.5,28.1  c26.9,33.7,55.1,61,80.1,49.1c25-11.9,28.9-75.8,7.7-164.3C445.1,160.5,422.6,113.5,377.8,100.1z M128.2,263.7  c-21.7,0-39.3-17.7-39.3-39.6c0-21.8,17.6-39.6,39.3-39.6c21.7,0,39.3,17.8,39.3,39.6S149.9,263.7,128.2,263.7z M309.7,243.6  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C329,234.9,320.4,243.6,309.7,243.6z M351.9,286  c-10.6,0-19.3-8.7-19.3-19.4c0-10.8,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,277.4,362.6,286,351.9,286z M351.9,201.1  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,192.4,362.6,201.1,351.9,201.1z   M394.2,243.6c-10.7,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.6,0,19.3,8.7,19.3,19.4  C413.5,234.9,404.9,243.6,394.2,243.6z" /></svg>
                                <span>
                                    {language.game + language.manage}
                                </span>
                            </Link>

                            <Link to={process.env.PUBLIC_URL + '/SubclassLayout'} onClick={() => setIsShowList(false)}>
                                <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z" /></svg>
                                <span>
                                    {language.subClass + language.manage}
                                </span>
                            </Link>
                            
                            <Link to={process.env.PUBLIC_URL + '/ServiceSettingLayout'} onClick={() => setIsShowList(false)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title /><path d="M13,7.06V5H11V7.06A9,9,0,0,0,3.06,15H2v2H22V15H20.94A9,9,0,0,0,13,7.06Z" /></svg>
                                <span>
                                    {language.service + language.manage}
                                </span>
                            </Link>

                            <Logout />
                        </div>
                        :
                        ''
                    }
                </div>
            </div >)
        }
        rendering()
    }, [dispatch, state.selectOption, isShowLanguage, isShowList, language.backstage, language.game, language.language, language.logout, language.manage, language.service, userData.account])
    useEffect(() => {
        render()
    }, [render])
    return layout
}

