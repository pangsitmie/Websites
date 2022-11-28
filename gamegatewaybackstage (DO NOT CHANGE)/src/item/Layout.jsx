
import React from "react";
import BackgroundImage from '../pic/back.png';
import { Link } from "react-router-dom";
import style from "../scss/Layout.module.scss";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.text = {};
    }

    search_input() {
        return (
            <input
                type="text"
            />
        );
    }

    search_field() {
        return (
            <div className={style.content_title}>
                <span className={style.content_span}>
                    {this.text.search_title}
                </span>
                {this.search_input()}
                <button className={style.button} onClick={()=>this._onSelect(0)}>
                    {this.text.new_button_text}
                </button>
            </div>
        )
    }

    _menu_item(text, key , bool) {
        return (
            <label className={style.menu_label} key={key}>
                <input type="radio" name="label" onClick={this._onSelect} defaultChecked={bool} />
                <span className={style.menu_span}>{text}</span>
            </label>
        );
    }

    menu_item() {
        return this._menu_item(this.text.title, 'item_1' , true);
    }

    menu_field() {
        return (
            <div className={style.div_menu}>
                {this.menu_item()}
                <Link className={style.div_back} to="/Lobby">
                    <img className={style.pic} src={BackgroundImage} alt="Background" />
                    <span className={style.text}>
                        返回
                    </span>
                </Link>
            </div>
        )
    }

    body() {
        return '';
    }

    render() {
        return (
            <div className={style.background} >
                <div className={style.div}>
                    {this.menu_field()}

                    <div className={style.div_content}>
                        <div className={style.content}>
                            {this.search_field()}
                            {this.body()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}