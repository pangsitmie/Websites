
import React from "react";
import style from "./Content.module.scss";
import PhoneCode from '../../tools/phoneCode.json';

export const _title = ({ title }) => {
    return (
        <div className={style.title}>
            <span>
                {title}
            </span>
        </div>
    );
}

export const _item = (item) => {
    let lists = []
    let i = 0;
    for (let data of item) {
        i++;
        lists.push(
            <input type="radio" name="itemRadio" id={i} key={'item' + i} defaultChecked={data.bool} />
        )
        lists.push(
            <label htmlFor={i} key={'label' + i} onClick={data._onClick} >
                <div>
                    {data.svg}
                    <span>
                        {data.name}
                    </span>
                </div>
            </label>
        )
    }
    return lists
}

export const item = () => {
    if (this.state.item)
        return (
            <div className={style.item}>
                {this._item(this.state.item)}
            </div>
        );
}

export const search_txt = ({ placeholder, onChange, defaultValue, onKeyPress, width }) => {
    return (
        <input
            className={style.search}
            key={'search_txt' + Math.random()}
            style={{ width: width ? width : '' }}
            type="text"
            placeholder={placeholder}
            onChange={e => { if (onChange) onChange(e) }}
            onKeyPress={async e => { if (onKeyPress) onKeyPress(e) }}
            defaultValue={defaultValue}
        />
    );
}

export const search_phone = ({ placeholder, inputOnChange, selectOnChange, onKeyPress, defaultValue }) => {
    let lists = []
    for (let data of PhoneCode) {
        lists.push(
            <option key={'phoneOption' + data.name} value={data.value}>{data.name}</option>
        )
    }
    return (
        <div className={style.search_phone} key={'search_phone' + Math.random()}>
            <select className={style.select} defaultValue='+886' onChange={e => { if (selectOnChange) selectOnChange(e) }}>
                {lists}
            </select>
            <input
                type="text"
                className={style.inputfield}
                placeholder={placeholder}
                onChange={e => { if (inputOnChange) inputOnChange(e) }}
                onKeyPress={async e => { if (onKeyPress) onKeyPress(e) }}
                defaultValue={defaultValue}
            />
        </div>
    );
}

export const search_filter = ({ placeholder, inputOnChange, selectOnChange, onKeyPress, defaultValue, filter }) => {
    let lists = []
    for (let data of filter) {
        lists.push(
            <option key={'phoneOption' + data.name} value={data.value}>{data.name}</option>
        )
    }
    return (
        <div className={style.search_phone} key={'search_phone' + Math.random()}>
            <select className={style.select} defaultValue='+886' onChange={e => { if (selectOnChange) selectOnChange(e) }}>
                {lists}
            </select>
            <input
                type="text"
                className={style.inputfield}
                placeholder={placeholder}
                onChange={e => { if (inputOnChange) inputOnChange(e) }}
                onKeyPress={async e => { if (onKeyPress) onKeyPress(e) }}
                defaultValue={defaultValue}
            />
        </div>
    );
}

export const button = ({ text, onClick }) => {
    return (
        <button onClick={() => onClick()}>
            {text}
        </button>
    )
}

export const handleChange = () => {
    this.setState({ search: this._search_ref.current.value });
}

export const enterDo = () => {
    return ''
}

export const filter = () => {
    return ''
}

export const _year = () => {
    let lists = []
    let dt = new Date();
    lists.push(
        <option key={"yearOption-"} value=''>----</option>
    )
    for (let i = 2019; i < parseInt(dt.getFullYear()) + 1; i++) {
        lists.push(
            <option key={"yearOption" + i} value={i}>{i}</option>
        )
    }
    return lists
}

export const _month = () => {
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

export const _date = (year, month) => {
    let lists = []
    let dt = new Date(year, month, 0)
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

export const dateList = () => {
    return (
        <div className={style.date_list} key={'dateList'}>
            <select
                className={style.year}
                onChange={(e) => {
                    this.setState({ year: e.target.value })
                }}
                defaultValue={this.state.year}
            >
                {this._year()}
            </select>

            <select
                className={style.month}
                onChange={(e) => {
                    this.setState({ month: e.target.value })
                }}
                defaultValue={this.state.month}
            >
                {this._month()}
            </select>

            <select
                className={style.date}
                onChange={(e) => {
                    this.setState({ date: e.target.value })
                }}
                defaultValue={this.state.date}
            >
                {this._date(this.state.year, this.state.month)}
            </select>
        </div>
    )
}

export const dateList_zone = () => {
    return (
        <div className={style.date_list_zone} key={'dateList_zone'}>
            <div className={style.date_list}>
                <select
                    className={style.year}
                    onChange={(e) => {
                        this.setState({ startYear: e.target.value })
                    }}
                    defaultValue={this.state.startYear}
                >
                    {this._year()}
                </select>

                <select
                    className={style.month}
                    onChange={(e) => {
                        this.setState({ startMonth: e.target.value })
                    }}
                    defaultValue={this.state.startMonth}
                >
                    {this._month()}
                </select>

                <select
                    className={style.date}
                    onChange={(e) => {
                        this.setState({ startDate: e.target.value })
                    }}
                    defaultValue={this.state.startDate}
                >
                    {this._date(this.state.startYear, this.state.startMonth)}
                </select>
            </div>

            <span>
                {this.language.to}
            </span>

            <div className={style.date_list}>
                <select
                    className={style.year}
                    onChange={(e) => {
                        this.setState({ endYear: e.target.value })
                    }}
                    defaultValue={this.state.endYear}
                >
                    {this._year()}
                </select>

                <select
                    className={style.month}
                    onChange={(e) => {
                        this.setState({ endMonth: e.target.value })
                    }}
                    defaultValue={this.state.endMonth}
                >
                    {this._month()}
                </select>

                <select
                    className={style.date}
                    onChange={(e) => {
                        this.setState({ endDate: e.target.value })
                    }}
                    defaultValue={this.state.endDate}
                >
                    {this._date(this.state.endYear, this.state.endMonth)}
                </select>
            </div>
        </div>
    )
}

export const searchFrame = ({ body }) => {
    return (
        <div className={style.searchDiv}>
            <div>
                {body}
            </div>
        </div>
    )
}

export const body = ({ body }) => {
    return (
        <div className={style.content}>
            {body}
        </div>
    )
}