import React from "react";

import BackgroundImage from '../pic/back.png';
import style from "../scss/hashtag_setting.module.scss";

export default class RTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.block}>
                    <div className={style.block_div_1}>
                        <img className={style.block_pic} src={BackgroundImage} alt="Background" />
                        <img className={style.block_pic2} src={BackgroundImage} alt="Background" />
                        <div className={style.block_tool}>
                            <button className={style.block_tool_add} onClick={()=>this.props.onSelect(this.prop.info, 1)}>
                                <button className={style.block_edit} alt="Background" />
                            </button>

                            <button className={style.block_tool_delete} onClick={()=>this.props.onSelect(this.prop.info, 2)}>
                                -
                        </button>
                        </div>
                    </div>

                    <div className={style.block_div_2}>
                        <label className={style.block_label}>名稱：
                        <textarea className={style.block_inputfield} value={[1,2,3]} />
                        </label>

                        <label className={style.block_label}>簡介：
                        <textarea className={style.block_inputfield} value={this.prop.data.description} />
                        </label>
                    </div>
                </div>
        );
    }
}