import React from "react";
import style from './Checkbox.module.scss';

export default ({ title, isRequired, comment, defaultValue, name, id, onClick, width, error }) => {
    let checkbox_style = {
        width: width ? width : '100%',
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    return (<div className={style.checkbox} style={checkbox_style}>
        <div className={style.title}>
            <span>
                {title}
            </span>
            {isRequired ? necessaryLayout : ''}
            {comment ? commentLayout : ''}
        </div>
        <input type='checkbox'
            id={'checkbox' + id}
            name={name}
            defaultChecked={defaultValue}
            onClick={() => { if (onClick) onClick() }}
        />
        <label htmlFor={'checkbox' + id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
        </label>
        <span className={style.error}>
            {error}
        </span>
    </div>)
}