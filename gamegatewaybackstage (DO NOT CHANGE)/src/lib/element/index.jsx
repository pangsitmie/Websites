import React, { useState, useRef, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from "immutability-helper";
import style from "./element.module.scss";
import EditImage from '../EditImage';
import * as d3 from 'd3';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

//輸入的外框
export class div extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     refs:'繼承的ref',
        //     title:'標題'
        //     content:'內容區',
        //     button:'按鈕區',
        // }
        const mask_styles = {
            mask_height: this.props.height,
            mask_width: this.props.width,
            backgroundColor: `rgba(0, 0, 0, ${this.props.mask_opacity})`,
        }
        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }
        const content_style = {
            height: this.props.content_height,
            width: this.props.content_width,
        }
        return (
            <div className={style.mask} style={mask_styles} >
                <div
                    type='text'
                    className={style.div}
                    ref={this.props.refs}
                    style={div_style}
                >
                    <span className={style.div_title}>
                        {this.props.title}
                    </span>
                    <div className={style.div_content} style={content_style}>
                        {this.props.content}
                    </div>
                    <div className={style.div_button}>
                        {this.props.button}
                    </div>
                </div>
            </div>
        )
    }
}

//刪除的外框
export class delete_div extends React.Component {

    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     refs:'繼承的ref',
        //     title:'標題'
        //     content:'內容區',
        //     button:'按鈕區',
        // }
        const mask_styles = {
            mask_height: this.props.height,
            mask_width: this.props.width,
            backgroundColor: `rgba(0, 0, 0, ${this.props.mask_opacity})`,
        }
        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <div className={style.mask} style={mask_styles} >
                <div
                    type='text'
                    className={style.delete_div}
                    ref={this.props.refs}
                    style={div_style}
                >
                    <div className={style.delete_div_content}>
                        {JSON.parse(localStorage.getItem('language')).default.doyouSureToDelete}<br />
                        <span>{this.props.content}</span>
                    </div>
                    <div className={style.delete_div_button}>
                        {this.props.button}
                    </div>
                </div>
            </div>
        )
    }
}

//空外框
export class empty_div extends React.Component {

    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     refs:'繼承的ref',
        //     title:'標題'
        //     content:'內容區',
        //     button:'按鈕區',
        // }
        const mask_styles = {
            mask_height: this.props.height,
            mask_width: this.props.width,
            backgroundColor: `rgba(0, 0, 0, ${this.props.mask_opacity})`,
        }
        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <div className={style.mask} style={mask_styles} >
                <div
                    type='text'
                    className={style.delete_div}
                    ref={this.props.refs}
                    style={div_style}
                >
                    <div className={style.delete_div_content}>
                        <span>{this.props.content}</span>
                    </div>
                    <div className={style.delete_div_button}>
                        {this.props.button}
                    </div>
                </div>
            </div>
        )
    }
}

//群組外框
export class group_div extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     refs:'繼承的ref',
        //     title:'標題'
        //     content:'內容區',
        //     button:'按鈕區',
        // }

        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }

        return (
            <div className={style.group_div}>
                <span>
                    {this.props.title}
                </span>
                <div style={div_style}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

//進度外框
export class step_div extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     refs:'繼承的ref',
        //     title:'標題'
        //     content:'內容區',
        //     button:'按鈕區',
        // }
        const mask_styles = {
            mask_height: this.props.height,
            mask_width: this.props.width,
            backgroundColor: `rgba(0, 0, 0, ${this.props.mask_opacity})`,
        }
        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }
        const content_style = {
            height: this.props.content_height,
            width: this.props.content_width,
        }
        return (
            <div className={style.mask} style={mask_styles} >
                <div
                    type='text'
                    className={style.step_div}
                    ref={this.props.refs}
                    style={div_style}
                >
                    <span>
                        {this.props.title}
                    </span>
                    <div style={content_style}>
                        <span>
                            {this.props.name}
                        </span>
                        <span>
                            {this.props.description}
                        </span>
                        {this.props.content}
                        <span className={style.error}>
                            {this.props.error_message}
                        </span>
                    </div>
                    <div>
                        {this.props.button}
                    </div>
                </div>
            </div>
        )
    }
}

//輸入框
export class inputfield extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     placeholder:'placeholder'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        // }
        const inputfield_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }
        return (
            <div className={style.inputfield_div}>
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <input
                    type='text'
                    className={style.inputfield}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    style={inputfield_styles}
                    onChange={e => this.props.onChange(e)}
                    readOnly={this.props.readOnly}
                />
                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>

        )
    }
}

//密碼框
export class password_inputfield extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     placeholder:'placeholder'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        //     EnterDo:'ENTER事件',
        // }
        const inputfield_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }
        return (
            <div className={style.inputfield_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <input
                    type='password'
                    className={style.inputfield}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    style={inputfield_styles}
                    onChange={e => this.props.onChange(e)}
                    readOnly={this.props.readOnly}
                    onKeyPress={e => { if (e.nativeEvent.keyCode === 13) this.props.onKeyPress() }}
                />
                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>

        )
    }
}

//下拉選單框
export class select extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     placeholder:'placeholder'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        //     callback:'回傳',
        // }
        const select_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }
        let defaultValue = '';
        let lists = []
        for (let data of this.props.option) {
            if (data === this.props.input) {
                defaultValue = data
                lists.push(
                    <option key={data} value={data}>{data}</option>
                )
            } else {
                lists.push(
                    <option key={data} value={data}>{data}</option>
                )
            }

        }

        return (
            <div className={style.inputfield_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <select className={style.select} style={select_styles} defaultValue={defaultValue} onChange={(e) => this.props.onChange(e)}>
                    {lists}
                </select>
                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>

        )
    }
}

//用於分類的下拉選單的輸入框
export class list_inputfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: false,
        }
        this._key = this.props.title + Math.random();
    }
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     placeholder:'placeholder'
        //     input:'父親儲存該變數的名稱',
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        //     callback:'子回傳在父親欲儲存的名稱'
        //     ButtonName:'按鈕上顯示的內容',
        //     onKeyPressEvent:'enter事件'
        //     lists: 'json檔案'{
        //          name:'名稱'
        //          code:'代碼'
        //     }
        // }
        let div_position = {
        }
        let element = document.getElementById('error_span' + this._key)
        if (element) {
            let x = element.offsetLeft;
            let y = element.offsetTop;
            div_position = {
                left: x,
                top: (y + 5),
            }
        }

        let lists = []

        for (let data of this.props.lists) {
            lists.push(
                <button
                    key={data.code}
                    className={style.list_inputfield_list_button}
                    onClick={() => {
                        this.props.onClick(data)
                        this.setState({ isOn: false })
                    }}
                >
                    {data.name}
                </button>
            )
        }

        let list = (
            <div className={style.list_inputfield_list} style={div_position}>
                <div>
                    {lists}
                </div>
            </div>
        )

        const inputfield_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }
        return (
            <div className={style.list_inputfield_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <div className={style.list_inputfield}>
                    <button className={style.list_inputfield_button} onClick={() => this.setState({ isOn: !this.state.isOn })}>
                        {this.props.input}
                    </button>
                    <input
                        type='text'
                        placeholder={this.props.placeholder}
                        className={style.list_inputfield_input}
                        defaultValue={this.props.defaultValue}
                        style={inputfield_styles}
                        readOnly={this.props.readOnly}
                        onChange={e => { if (this.props.onChange) this.props.onChange(e) }}
                        onKeyPress={e => {
                            if (e.nativeEvent.keyCode === 13) {
                                if (this.props.onKeyPress) this.props.onKeyPress(e)
                            }
                        }}
                    />
                </div>
                <span className={style.error} id={'error_span' + this._key}>
                    {this.props.error_message}
                </span>
                {this.state.isOn ? list : ''}
            </div>

        )
    }
}

//有兩個下拉選單和查詢框並提供回傳值
export class list_v2_inputfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn_1: false,
            isOn_2: false,
        }
        this._key = this.props.title + Math.random();
    }
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     callback:'子回傳在父親欲儲存的名稱'
        //     select:'子回傳在父親已選擇的內容'
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        //     ButtonName:'按鈕上顯示的內容',
        //     lists: 'json檔案'{
        //          name:'名稱'
        //          code:'代碼'
        //     }
        //     lists_2: 'Map物件'{
        //          name:'名稱'
        //          id:'代號'
        //     }
        // }
        let div_position = {
        }
        let element = document.getElementById('error_span' + this._key)
        if (element) {
            let x = element.offsetLeft;
            let y = element.offsetTop;
            div_position = {
                left: x,
                top: (y + 5),
            }
        }

        //左邊下拉選單內容
        let lists = []
        for (let data of this.props.lists) {
            lists.push(
                <button
                    key={'lists' + data.code}
                    className={style.list_v2_inputfield_list_button}
                    onClick={() => {
                        this.props.onClick_leftBtn(data)
                        this.setState({ isOn_1: false })
                    }}
                >
                    {data.name}
                </button>
            )
        }
        let list = (
            <div className={style.list_v2_inputfield_list} style={div_position}>
                <div>
                    {lists}
                </div>
            </div>
        )
        //右邊下拉選單內容
        let lists_2 = []
        for (let data of this.props.lists_2) {
            lists_2.push(
                <button
                    key={'lists_2' + data.id}
                    className={style.list_v2_inputfield_list_button}
                    onClick={() => {
                        this.props.onClick_rightBtn(data)
                    }}
                >
                    {data.name}
                </button>
            )
        }
        let list_2 = (
            <div className={style.list_v2_inputfield_list} style={div_position}>
                <div>
                    {lists_2}
                </div>
            </div>
        )

        const inputfield_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }
        return (
            <div className={style.list_v2_inputfield_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <div className={style.list_v2_inputfield}>
                    <button className={style.list_v2_inputfield_button} onClick={() => this.setState({ isOn_1: !this.state.isOn_1, isOn_2: false })}>
                        {this.props.input}
                    </button>
                    <input
                        type='text'
                        className={style.list_v2_inputfield_input}
                        defaultValue={this.props.defaultValue}
                        placeholder={this.props.placeholder}
                        style={inputfield_styles}
                        onChange={e => this.props.onChange(e)}
                        readOnly={this.props.readOnly}
                        onKeyPress={e => { if (this.props.onKeyPress) this.props.onKeyPress(e) }}
                    />
                    <button className={style.list_v2_inputfield_arrow} onClick={() => this.setState({ isOn_2: !this.state.isOn_2, isOn_1: false })}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                </div>
                <span className={style.error} id={'error_span' + this._key}>
                    {this.props.error_message}
                </span>
                {this.state.isOn_1 ? list : ''}
                {this.state.isOn_2 ? list_2 : ''}
            </div>
        )
    }
}

//編輯框
export class textarea extends React.Component {

    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     placeholder:'placeholder'
        //     error_message:'錯誤訊息'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     Info:'輔助資訊設計',
        //     isReadOnly:'是否唯讀',
        // }
        const textarea_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }

        return (
            <div className={style.textarea_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                    {this.props.Info ? <svg onClick={this.props.Info} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> : ''}
                </div>
                <div className={style.textarea} style={textarea_styles}>
                    <textarea
                        type='text'
                        placeholder={this.props.placeholder}
                        ref={this.props.refs}
                        defaultValue={this.props.defaultValue}
                        onChange={e => this.props.onChange(e)}
                        readOnly={this.props.readOnly}
                    />
                </div>
                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>

        )
    }
}

//擁有物件的展示框
export class obj_result extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     title:'標題'
        //     parent:'父親',
        //     input:'父親儲存該變數的名稱',
        //     callback:'子回傳在父親欲儲存的名稱'
        //     error_message:'錯誤訊息'
        //     refs:'繼承的ref',
        // }

        //擁有的物件

        let lists = []
        for (let value of this.props.input) {
            lists.push(
                <button
                    key={'lists' + value.id}
                    className={style.obj_result_button}
                    onClick={() => {
                        this.props.onClick(value.id)
                    }}
                >
                    {value.name}&ensp;X
                </button>
            )
        }

        const textarea_styles = {
            height: this.props.height,
            width: this.props.width,
            border: this.props.error_message ? '1.4px solid #ff0000' : '',
            boxShadow: this.props.error_message ? '0 0 2px #ff0000' : '',
        }

        return (
            <div className={style.textarea_div} >
                <div className={style.title}>
                    <span >
                        {this.props.title}
                    </span>
                </div>
                <div className={style.obj_result} style={textarea_styles}>
                    <div>
                        {lists}
                    </div>
                </div>
                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>

        )
    }
}

//單一選框
export class single_checkbox extends React.Component {

    render() {

        //資料範例
        // data = {
        //     description: '內容闡述',
        //     ref: React.creatRef,
        //     checked: 'boolean',
        //     title:'標題'
        //     error_message:'錯誤訊息'
        //     _onClick:'function'
        // }

        return (
            <div className={style.checkbox_div} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={style.checkbox}>
                    <label className={style.checkbox_label}>
                        <input type="checkbox" defaultChecked={this.props.defaultChecked} onClick={() => this.props.onClick()} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                        {this.props.description}
                    </label>
                </div>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//多選框
export class checkbox extends React.Component {

    render() {

        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         description: '內容闡述',
        //         ref: React.creatRef,
        //     error_message:'錯誤訊息'
        //         checked: 'boolean',
        //         _onClick:'function',
        //     }
        //     title:'標題'
        // }
        let lists = []
        for (let value of Object.values(this.props.input)) {
            lists.push(
                <label key={'checkbox_list' + value.description} className={style.checkbox_label}>
                    <input type="checkbox" name={this.props.title + Math.random()}
                        defaultChecked={this.props.defaultChecked ? this.props.defaultChecked.indexOf(value.type) !== -1 ? true : false : false}
                        onClick={() => {
                            this.props.onClick(value.type)
                        }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                    {value.description}
                </label>
            )
        }

        return (
            <div className={style.checkbox_div} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={style.checkbox}>
                    {lists}
                </div>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

const Card = ({ id, text, index, moveCard }) => {
    const ItemTypes = {
        CARD: "card"
    };
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
        <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <div>
                <div>
                    <div /><div /><div /><div />
                </div>
                <div>
                    <div /><div /><div /><div />
                </div>
            </div>

            <span>
                {text}
            </span>
        </div>
    );
};

const Container = ({ input, output }) => {
    {
        const [cards, setCards] = useState(input);
        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex];
                setCards(
                    update(cards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard]
                        ]
                    })
                );
            },
            [cards]
        );
        const renderCard = (card, index) => {
            output(card, index)
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            );
        };
        return (
            <div>
                <div>
                    名稱
                </div>
                {cards.map((card, i) => renderCard(card, i))}
            </div>
        );
    }
};

//拖曳排序
export class sort_checkbox extends React.Component {


    render() {

        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         description: '內容闡述',
        //         refs:'繼承的ref',
        //     }
        //     rank:'被選上的排序 ex[2,1,3]'
        //     title:'標題'
        //     _onClick:'function'
        // }

        return (
            <div className={style.sort_checkbox_div} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={style.sort_checkbox}>
                    <DndProvider backend={HTML5Backend}>
                        <Container
                            input={this.props.lists}
                            output={(card, index) => { this.props.callback(card, index) }}
                        />
                    </DndProvider>
                </div>
            </div>
        )
    }
}

//數字排序包括圖案的多選框
export class sort_pic_checkbox extends React.Component {
    render() {
        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         id: 'ID',
        //         image: '圖案',
        //         description: '內容闡述',
        //         refs:'繼承的ref',
        //     }
        //     rank:'被選上的排序 ex[2,1,3]'
        //     title:'標題'
        //     _onClick:'function'
        // }
        let lists = []
        for (let value of this.props.lists) {
            if (this.props.input === '' || value.description.indexOf(this.props.input) !== -1) {
                lists.push(
                    <label key={'sort_pic_checkbox_label' + value.description} htmlFor={value.description}>
                        <input
                            type="checkbox"
                            id={value.description}
                            name={this.props.name}
                            defaultChecked={this.props.rank.indexOf(value.id) !== -1 ? true : false}
                            onClick={(e) => {
                                this.props.onClick(value.id)
                            }}
                        />
                        <div className={style.sort_pic_checkbox_label}>
                            <div className={style.sort_pic_checkbox_number}>
                                <span>
                                    {this.props.rank.indexOf(value.id) !== -1 ? this.props.rank.indexOf(value.id) + 1 : ''}
                                </span>
                            </div>
                            <img src={value.image_url} alt='alt' />
                            <span>
                                {value.description}
                            </span>
                        </div>

                    </label>
                )
            }
        }

        return (
            <div className={style.sort_pic_checkbox_div}>
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div>
                    {this.props.content}
                </div>
                <div className={style.sort_pic_checkbox}>
                    {lists}
                </div>
            </div>
        )
    }
}

//含img多選框
export class img_checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }

    render() {
        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         id: 'ID',
        //         image: '圖案',
        //         description: '內容闡述',
        //         refs:'繼承的ref',
        //     }
        //     rank:'被選上的排序 ex[2,1,3]'
        //     title:'標題'
        //     _onClick:'function'
        // }

        const div_style = {
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <label htmlFor={this.props.htmlFor} className={style.img_checkbox}>
                <input
                    type="checkbox"
                    id={this.props.id}
                    name={this.props.name}
                    defaultChecked={this.props.defaultChecked}
                    onClick={(e) => {
                        if (e.currentTarget.checked) {

                        }
                        this.props.onClick(e)
                    }}
                />
                <span>
                    {this.props.span}
                </span>
                <div style={div_style}>
                    <img src={this.props.img} alt={this.props.alt} />
                </div>

            </label>
        )
    }
}

//單選框
export class radio extends React.Component {

    render() {

        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         description: '內容闡述',
        //         ref: React.creatRef,
        //     error_message:'錯誤訊息'
        //         checked: 'boolean',
        //         _onClick:'function',
        //     }
        //     title:'標題'
        // }
        let lists = []
        for (let [key, data] of this.props.checkbox.entries()) {
            lists.push(
                <label key={'checkbox_list' + key} className={style.checkbox_label}>
                    <input type="radio" name={data.group} ref={data.ref} defaultChecked={data.checked} onClick={data._onClick} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                    {data.description}
                </label>
            )
        }

        return (
            <div className={style.checkbox_div} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={style.checkbox}>
                    {lists}
                </div>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//按鈕
export class button extends React.Component {
    render() {

        //資料範例
        // data = {
        //     backgroundColor: '按鈕顏色',
        //     color:'字體顏色',
        //     name:'內容',
        //     _onClick:'function',
        //     disabled: '禁用BUTTON',
        // }
        const button_style = {
            padding: this.props.height + ' ' + this.props.width,
            backgroundColor: this.props.backgroundColor,
            color: this.props.color,
        }
        return (
            <button className={style.button} style={button_style} onClick={(e) => this.props.onClick(e)} disabled={this.props.disabled}>
                {this.props.name}
            </button>
        )
    }
}

//小按鈕
export class small_button extends React.Component {
    render() {

        //資料範例
        // data = {
        //     backgroundColor: '按鈕顏色',
        //     color:'字體顏色',
        //     name:'內容',
        //     _onClick:'function',
        //     disabled: '禁用BUTTON',
        // }
        const button_style = {
            padding: this.props.height + ' ' + this.props.width,
            backgroundColor: this.props.backgroundColor,
            color: this.props.color,
        }
        return (
            <div className={style.small_button_div} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <button className={style.small_button} style={button_style} onClick={(e) => this.props.onClick(e)} disabled={this.props.disabled}>
                    {this.props.name}
                </button>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//超連結
export class href extends React.Component {

    render() {

        //資料範例
        // data = {
        //     url: '網址',
        //     name:'內容',
        //     _onClick:'function',
        // }
        return (
            <a className={style.href} href={this.props.url} target="_blank" rel="noopener noreferrer">
                {this.props.name}
            </a>
        )
    }
}

//編輯圖片框
export class editImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_error: '',
            file: this.props.input
        }
        if (this.state.file && typeof (this.state.file) !== 'string') {
            let reader = new window.FileReader();
            reader.onload = (event) => {
                this.setState({ file: event.target.result })
            }
            reader.readAsDataURL(this.props.input)
        }
    }

    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     parent:'父親',
        //     error_message:'錯誤訊息'
        //     minHeight:'最低高度'
        //     minWidth:'最低寬度'
        //     mergeHeight:'符合高度'
        //     mergeWidth:'符合寬度'
        // }
        const form_styles = {
            height: this.props.height,
            width: this.props.width,
        }

        const img_styles = {
            height: this.props.imgHeight,
            width: this.props.imgWidth,
        }

        return (
            <form className={style.editImage} style={form_styles} >
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <EditImage style={img_styles} src={this.state.file || this.props.altImg} alt="upload img" maxHeight={this.props.maxHeight || '1080'} maxWidth={this.props.maxWidth || '1920'} onChange={(err, file) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if ((file.size / 1024 / 1024) > 8) {
                        this.setState({ error: '圖片大小8M以下' })
                        return;
                    }
                    // save file or upload 
                    let reader = new window.FileReader();
                    reader.onload = (event) => {
                        let image = new window.Image();
                        image.onload = () => {
                            let width = image.width;
                            let height = image.height;
                            if (this.props.minWidth) {
                                if (width < this.props.minWidth || height < this.props.minHeight) {
                                    this.setState({ error: '圖片大小8M以下;像素比為' + this.props.minWidth + 'x' + this.props.minHeight })
                                    return;
                                } else {
                                    this.setState({ error: '' })
                                }
                            }

                            if (this.props.mergeWidth) {
                                if (width !== this.props.mergeWidth || height !== this.props.mergeHeight) {
                                    this.setState({ error: '圖片大小8M以下;像素比為' + this.props.mergeWidth + 'x' + this.props.mergeHeight })
                                    return;
                                } else {
                                    this.setState({ error: '' })
                                }
                            }
                            this.props.onload(file)
                        };
                        image.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }} />
                <span className={style.error}>
                    {this.props.error_message || this.state.error}
                </span>
            </form>
        )
    }
}

//編輯圖片框
export class imageBlock extends React.Component {
    render() {

        //資料範例
        // data = {
        //     height: '長度',
        //     width:'寬度',
        //     parent:'父親',
        //     error_message:'錯誤訊息'
        //     minHeight:'最低高度'
        //     minWidth:'最低寬度'
        //     mergeHeight:'符合高度'
        //     mergeWidth:'符合寬度'
        // }
        const div_styles = {
            height: this.props.height,
            width: this.props.width,
        }

        const img_styles = {
            height: this.props.imgHeight,
            width: this.props.imgWidth,
        }

        return (
            <div className={style.image} style={div_styles} >
                <img src={this.props.src} alt={this.props.alt} style={img_styles} />
            </div>
        )
    }
}

//清單列表
export class ul_list extends React.Component {

    render() {

        //資料範例
        // data = {
        //     checkbox = {
        //         group: '群組名稱',
        //         description: '內容闡述',
        //         ref: React.creatRef,
        //     error_message:'錯誤訊息'
        //         checked: 'boolean',
        //         _onClick:'function',
        //     }
        //     title:'標題'
        // }
        const ul_style = {
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <div className={style.ul_list_div} style={ul_style}>
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div className={style.ul_list} id={this.props.id}>
                    <ul name={this.props.name}>
                        {this.props.content}
                    </ul>
                </div>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//進度圈
export class progressBar extends React.Component {
    draw(process) {
        let percent = (2.3 - 0.69931) * process + 0.69931
        let canvas = document.getElementById("myCanvas");
        if (canvas) {
            let ctx = canvas.getContext("2d");
            canvas.height = 300
            canvas.width = 300
            ctx.lineCap = 'round'
            var lingrad = ctx.createLinearGradient(0, 300, 150, 150);
            lingrad.addColorStop(0, '#0faf00');
            lingrad.addColorStop(0.5, '#ff9900');
            lingrad.addColorStop(1, '#ff5555');
            ctx.beginPath()
            //沿用寬度及色彩設定
            ctx.lineWidth = 15;
            ctx.strokeStyle = "#eee"
            ctx.shadowOffsetX = -0;
            ctx.shadowOffsetY = -0;
            ctx.shadowBlur = -2;
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
            /*使用arc(x,y,r,s,e)畫一個圓
            x,y是圓心的座標，r是半徑，s和e是起點和終點的角度*/
            ctx.arc(150, 150, 100, Math.PI / 1.45, Math.PI * 2.3)
            ctx.stroke()
            ctx.beginPath()
            //沿用寬度及色彩設定
            ctx.lineWidth = 5;
            ctx.strokeStyle = lingrad
            ctx.shadowColor = "";
            /*使用arc(x,y,r,s,e)畫一個圓
            x,y是圓心的座標，r是半徑，s和e是起點和終點的角度*/
            ctx.arc(150, 150, 100, Math.PI / 1.43, Math.PI * percent)
            ctx.stroke()
        }
    }

    componentDidMount() {
        this.draw(this.props.process)
    }

    componentDidUpdate() {
        this.draw(this.props.process)
    }

    render() {

        //資料範例
        // data = {
        //     checkbox = {
        //         process: '進度',
        //         value: '現在的值',
        //         limit: '限制值',
        //         ref: React.creatRef,
        //         error_message:'錯誤訊息'
        //         checked: 'boolean',
        //         _onClick:'function',
        //     }
        //     title:'標題'
        // }

        const progressBar_style = {
            height: this.props.height,
            width: this.props.width,
        }
        return (
            <div className={style.progressBar_div} style={progressBar_style}>
                <canvas id="myCanvas" />
                <span>
                    {this.props.value + ' / ' + this.props.limit}
                </span>
                <span className={style.error} id='error_span'>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//狀態列表具備動作
export class action_list extends React.Component {

    render() {

        // 資料範例
        // data = {
        //     checkbox = {
        //         parent: '父親',
        //         height: '物件高度',
        //         width: '物件寬度',
        //         input: '輸入的MAP',
        //         placeholder: 'placeholder',
        //         payback: '回傳值',
        //         isReadOnly: '唯獨',
        //         ref: React.creatRef,
        //         error_message: '錯誤訊息'
        //         onClick: 'function',
        //         disabled: '禁用BUTTON',
        //     }
        // }
        const action_list_style = {
            height: this.props.height,
            width: this.props.width,
        }

        let lists = []

        for (let data of this.props.input.values()) {
            lists.push(
                <div key={data.id} className={style.action_list}>
                    <div>
                        <span>
                            {data.title}
                        </span>

                        <span>
                            {data.value}
                        </span>
                    </div>
                    <div>
                        <input
                            type='text'
                            className={style.inputfield}
                            placeholder={this.props.placeholder}
                            onChange={e => this.props.parent[this.props.payback] = e.target.value}
                            readOnly={this.props.isReadOnly}
                        />
                        <button onClick={() => this.props.onClick(data.id)}>
                            付款
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div className={style.action_list_div} style={action_list_style}>
                {lists}
            </div>
        )
    }
}

//團隊清單
export class group_list extends React.Component {

    _group(content) {
        let lists = []
        for (let [key, value] of Object.entries(content)) {
            switch (key) {
                case ('delivery_persons'):
                    for (let value_2 of Object.values(value)) {
                        lists.push(
                            <span key={'delivery_persons' + value_2.id}>
                                {value_2.last_name + value_2.first_name}
                            </span>
                        )
                    }
                    break;
                case ('restaurants'):
                    for (let value_2 of Object.values(value)) {
                        lists.push(
                            <span key={'restaurants' + value_2.id}>
                                {value_2.name}
                            </span>
                        )
                    }
                    break;
                default:
                    break;
            }
        }
        return lists
    }

    render() {

        // 資料範例
        // data = {
        //     checkbox = {
        //         parent: '父親',
        //         height: '物件高度',
        //         width: '物件寬度',
        //         isReadOnly: '唯獨',
        //         _onClick: 'function',
        //     }
        // }
        const group_lists_style = {
            height: this.props.height,
            width: this.props.width,
        }

        let lists = []

        if (this.props.input) {
            for (let value of this.props.input) {
                lists.push(
                    <div className={style.group} key={'group' + value.name} onClick={() => this.props.onClick(value)}>
                        <span>
                            {value.name}
                        </span>
                        <div>
                            {this._group(value)}
                        </div>
                    </div>

                )
            }
        }

        return (
            <div className={style.group_list_div} style={group_lists_style}>
                <div className={style.group_list}>
                    <span>
                        {this.props.title}
                    </span>
                    <div>
                        {lists}
                    </div>
                </div>
            </div>
        )
    }
}

//日期選單
export class date_list extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date()
        let nowYear = String(date.getFullYear())
        let nowMonth = date.getMonth() + 1 < 9 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
        let nowDate = date.getDate() < 9 ? '0' + String(date.getDate()) : String(date.getDate())
        this.state = {
            year: nowYear,
            month: nowMonth,
            date: nowDate
        }
    }

    _year() {
        let lists = []
        let dt = new Date();
        lists.push(
            <option key={"yearOption-"} value=''>---</option>
        )
        for (let i = 2019; i < parseInt(dt.getFullYear()) + 1; i++) {
            lists.push(
                <option key={"yearOption" + i} value={i}>{i}</option>
            )
        }
        return lists
    }

    _month() {
        let lists = []
        lists.push(
            <option key={"yearOption-"} value=''>---</option>
        )
        for (let i = 1; i < 13; i++) {
            let value = String(i).length < 2 ? '0' + i : i
            lists.push(
                <option key={"monthOption" + i} value={value}>{value}</option>
            )
        }
        return lists
    }

    _date() {
        let lists = []
        let dt = new Date(this.state.year, this.state.month, 0)
        lists.push(
            <option key={"yearOption-"} value=''>---</option>
        )
        for (let i = 1; i < parseInt(dt.getDate()) + 1; i++) {
            let value = String(i).length < 2 ? '0' + i : i
            lists.push(
                <option key={"dateOption" + i} value={value}>{value}</option>
            )
        }
        return lists
    }

    render() {

        // 資料範例
        // data = {
        //     checkbox = {
        //         parent: '父親',
        //         height: '物件高度',
        //         width: '物件寬度',
        //         title: '標題',
        //         error_message: '錯誤訊息',
        //         input: '父親儲存該變數的名稱',
        //         defaultYear='預設年'',
        //         defaultMonth='預設月',
        //         defaultDate='預設日',
        //     }
        // }
        const date_lists_style = {
            height: this.props.height,
            width: this.props.width,
        }

        return (
            <div className={style.date_list_div} style={date_lists_style}>
                <div className={style.title}>
                    <span>
                        {this.props.title}
                    </span>
                </div>

                <div className={style.date_list}>
                    <select
                        className={style.year}
                        onChange={(e) => {
                            this.setState({ year: e.target.value })
                            this.props.onChange(e.target.value + '-' + this.state.month + '-' + this.state.date)
                        }}
                        defaultValue={this.state.year}
                    >
                        {this._year()}
                    </select>

                    <select
                        className={style.month}
                        onChange={(e) => {
                            this.setState({ month: e.target.value })
                            this.props.onChange(this.state.year + '-' + e.target.value + '-' + this.state.date)
                        }}
                        defaultValue={this.state.month}
                    >
                        {this._month()}
                    </select>

                    <select
                        className={style.date}
                        onChange={(e) => {
                            this.setState({ date: e.target.value })
                            this.props.onChange(this.state.year + '-' + this.state.month + '-' + e.target.value)
                        }}
                        defaultValue={this.state.date}
                    >
                        {this._date()}
                    </select>
                </div>

                <span className={style.error}>
                    {this.props.error_message}
                </span>
            </div>
        )
    }
}

//時段選擇
export class selectDateZone extends React.Component {
    render() {

        // 資料範例
        // data = {
        //     checkbox = {
        //         parent: '父親',
        //         height: '物件高度',
        //         width: '物件寬度',
        //         title: '標題',
        //         error_message: '錯誤訊息',
        //         input: '父親儲存該變數的名稱',
        //     }
        // }
        const selectDateZone_style = {
            height: this.props.height,
            width: this.props.width,
        }

        let timeZone = [
            <div key='timeZoneNull'>
                <span>
                    {' '}
                </span>
            </div>,
            <div key='timeZoneAll'>
                <span>
                    {'全選'}
                </span>
            </div>
        ]
        for (let value of this.props.timeZone) {
            timeZone.push(
                <div key={'timeZone' + value.id}>
                    <span>
                        {value.startTime}
                    </span>
                    <span>
                        {'|'}
                    </span>
                    <span>
                        {value.endTime}
                    </span>
                </div>
            )
        }
        let lists = []
        for (let value of this.props.input) {
            let checkBoxs = []
            checkBoxs.push(
                <label key={'selectDateZone' + value.description} htmlFor={value.description}>
                    <input
                        type="radio"
                        id={value.description}
                        name={'all'}
                        // defaultChecked={this.props.rank.indexOf(value.id) !== -1 ? true : false}
                        onChange={(e) => {
                            for (let value_2 of this.props.timeZone) {
                                document.getElementById(value.description + value_2.id).checked = true
                            }
                        }}
                        disabled={this.props.disabled}
                    />
                </label>
            )
            for (let value_2 of this.props.timeZone) {
                checkBoxs.push(
                    <label key={'selectDateZone' + value.description + value_2.id} htmlFor={value.description + value_2.id}>
                        <input
                            type="radio"
                            id={value.description + value_2.id}
                            name={'selectDateZone' + value_2.id}
                            defaultChecked={value.selectTimeZone.findIndex(e => parseInt(e) === value_2.id) !== -1 ? true : false}
                            disabled={this.props.disabled}
                        />
                    </label >
                )
            }
            lists.push(
                <div className={style.timeZone} key={'timeZone' + value.description}>
                    <span>
                        {value.description}
                    </span>
                    {checkBoxs}
                </div>
            )
        }

        return (
            <div className={style.selectDateZone} style={selectDateZone_style} >
                <div className={style.timeZone}>
                    {timeZone}
                </div>
                {lists}
            </div>
        )
    }
}



