import React from "react";
import style from './Inputfield_withList.module.scss';

export default ({ title, isRequired, comment, selectDefaultValue, defaultValue, onChange, onKeyPress, selectOnChange, option, inputfieldWidth, error, isReadOnly, inputType }) => {
    let inputfieldStyle = {
        width: inputfieldWidth ? inputfieldWidth : '100%',
        border: isReadOnly ? 'none' : error ? '1.4px solid #ff0000' : '',
        cursor: isReadOnly ? 'default' : 'pointer'
    }
    let selectStyle = {
        border: isReadOnly ? 'none' : '',
        cursor: isReadOnly ? 'default' : 'pointer',
        appearance: isReadOnly ? 'none' : ''
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    let options = []
    option.map((value) => {
        options.push(<option value={value.value} key={value.value + value.name}>
            {value.name}
        </option>)
    })
    return (<div className={style.inputfield}>
        <div className={style.title}>
            <span>
                {title}
            </span>
            {isRequired ? necessaryLayout : ''}
            {comment ? commentLayout : ''}
        </div>
        <div>
            <select style={selectStyle} defaultValue={selectDefaultValue || options[0].value} onChange={e => { if (selectOnChange) selectOnChange(e.target.value) }}>
                {options}
            </select>
            <input
                type={inputType ? inputType : 'text'}
                style={inputfieldStyle}
                defaultValue={defaultValue}
                onChange={e => { if (onChange) onChange(e.target.value) }}
                readOnly={isReadOnly}
                onKeyPress={e => {
                    if (e.nativeEvent.keyCode === 13) {
                        if (onKeyPress) onKeyPress(e.target.value)
                    }
                }}
            />
        </div>
        <span className={style.error}>
            {error}
        </span>
    </div>)
}