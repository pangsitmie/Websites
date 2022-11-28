import React, { useEffect, useState } from "react";
import style from './DateZone.module.scss';


export default ({ title, isRequired, comment, width, onChange, error, defaultYear, defaultMonth, defaultDate }) => {
    let dt = new Date()
    const nowYear = String(dt.getFullYear())
    const nowMonth = dt.getMonth() + 1 < 9 ? '0' + String(dt.getMonth() + 1) : String(dt.getMonth() + 1)
    const nowDate = dt.getDate() < 9 ? '0' + String(dt.getDate()) : String(dt.getDate())
    const [layout, setLayout] = useState(<div />)
    const [year, setYear] = useState(defaultYear || nowYear)
    const [month, setMonth] = useState(defaultMonth || nowMonth)
    const [date, setDate] = useState(defaultDate || nowDate)

    let select_style = {
        width: width ? width : '90%',
        border: error ? '1.4px solid #ff0000' : ''
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    //rerender
    useEffect(() => {
        let yearLists = []
        yearLists.push(
            <option key={"yearOption-"} value=''>----</option>
        )
        for (let i = 2019; i < parseInt(dt.getFullYear()) + 10; i++) {
            yearLists.push(
                <option key={"yearOption" + i} value={String(i)}>{i}</option>
            )
        }
        let monthLists = []
        monthLists.push(
            <option key={"monthOption-"} value=''>---</option>
        )
        for (let i = 1; i < 13; i++) {
            let value = String(i).length < 2 ? '0' + i : i
            monthLists.push(
                <option key={"monthOption" + i} value={value}>{value}</option>
            )
        }
        let dateLists = []
        dt = new Date(year, month, 0)
        dateLists.push(
            <option key={"dateOption-"} value=''>---</option>
        )
        for (let i = 1; i < parseInt(dt.getDate()) + 1; i++) {
            let value = String(i).length < 2 ? '0' + i : i
            dateLists.push(
                <option key={"dateOption" + i} value={value}>{value}</option>
            )
        }
        setLayout(<div className={style.dateTimeZone} style={select_style}>
            <div className={style.title}>
                <span>
                    {title}
                </span>
                {isRequired ? necessaryLayout : ''}
                {comment ? commentLayout : ''}
            </div>
            <div className={style.group}>
                <select className={style.year} defaultValue={defaultYear} onChange={(e) => { setYear(e.target.value); onChange(e.target.value + '-' + month + '-' + date) }}>
                    {yearLists}
                </select>

                <select className={style.month} defaultValue={defaultMonth} onChange={(e) => { setMonth(e.target.value); onChange(year + '-' + e.target.value + '-' + date) }}>
                    {monthLists}
                </select>

                <select className={style.date} defaultValue={defaultDate} onChange={(e) => { setDate(e.target.value); onChange(year + '-' + month + '-' + e.target.value) }}>
                    {dateLists}
                </select>
            </div>
            <span className={style.error}>
                {error}
            </span>
        </div>)
    }, [year, month, date])
    return (layout);
}