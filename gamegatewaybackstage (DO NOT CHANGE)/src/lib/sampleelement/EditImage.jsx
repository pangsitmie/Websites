import React from "react";
import EditImage from '../EditImage';
import alt_img from './add.svg';
import style from './EditImage.module.scss';

export default ({ title, isRequired, comment, defaultValue, onChange, error, divHeight, divWidth, minWidth, minHeight, mergeWidth, mergeHeight, maxWidth, maxHeight, imgWidth, imgHeight }) => {
    let divStyle = {
        height: divHeight,
        width: divWidth,
    }
    let imgStyles = {
        height: imgHeight,
        width: imgWidth,
    }
    const necessaryLayout = (<span className={style.necessary}>
        *
    </span>)
    const commentLayout = (<span className={style.comment}>
        ({comment})
    </span>)
    return (<div className={style.editImage} style={divStyle}>
        <div className={style.title}>
            <span>
                {title}
            </span>
            {isRequired ? necessaryLayout : ''}
            {comment ? commentLayout : ''}
        </div>
        <EditImage style={imgStyles} src={defaultValue || alt_img} alt="upload img" maxHeight={maxHeight || '1080'} maxWidth={maxWidth || '1920'} onChange={(err, file) => {
            if (err) {
                console.log(err);
                return;
            }
            if ((file.size / 1024 / 1024) > 8) {
                alert('圖片大小8M以下')
                return;
            }
            // save file or upload 
            let reader = new window.FileReader();
            reader.onload = (event) => {
                let image = new window.Image();
                image.onload = () => {
                    let width = image.width;
                    let height = image.height;
                    if (minWidth) {
                        if (width < minWidth || height < minHeight) {
                            alert('圖片大小8M以下;像素比為' + minWidth + 'x' + minHeight)
                            return;
                        }
                    }

                    if (mergeWidth) {
                        if (width !== mergeWidth || height !== mergeHeight) {
                            alert('圖片大小8M以下;像素比為' + mergeWidth + 'x' + mergeHeight)
                            return;
                        }
                    }
                    onChange(file)
                };
                image.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }} />
        <span className={style.error}>
            {error}
        </span>
    </div>)
}