import React from "react";
import style from './Inputfield.module.scss';

export default ({ title, isRequired, comment, defaultValue, onChange, onKeyPress, inputfieldWidth, error, isReadOnly, inputType }) => {
    let inputfieldStyle = {
        width: inputfieldWidth ? inputfieldWidth : '100%',
        border: isReadOnly ? 'none' : error ? '1.4px solid #ff0000' : '',
        cursor: isReadOnly ? 'default' : 'pointer'
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    return (<div className={style.inputfield}>
        <div className={style.title}>
            <span>
                {title}
            </span>
            {isRequired ? necessaryLayout : ''}
            {comment ? commentLayout : ''}
        </div>
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
        <span className={style.error}>
            {error}
        </span>
    </div>)
}