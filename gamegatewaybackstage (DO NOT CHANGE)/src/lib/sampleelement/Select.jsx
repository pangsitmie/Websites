import React from "react";
import style from './Select.module.scss';

export default ({ _key, title, isRequired, comment, defaultValue, width, onChange, error, options, disabled }) => {
    let select_style = {
        width: width ? width : '90%',
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    let lists = []
    options.map((optionData) => {
        lists.push(<option key={optionData.name + optionData.value} value={optionData.value}>{optionData.name}</option>)
    })
    return (<div className={style.select} style={select_style}>
        <div className={style.title}>
            <span>
                {title}
            </span>
            {isRequired ? necessaryLayout : ''}
            {comment ? commentLayout : ''}
        </div>
        <select id={_key} defaultValue={defaultValue} onChange={e => { if (onChange) onChange(e.target.value) }} disabled={disabled}>
            {lists}
        </select>
        <span className={style.error}>
            {error}
        </span>
    </div>)
}