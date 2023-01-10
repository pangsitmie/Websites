import { defaultBillboardImageURL, defaultCoverURL, defaultLogoURL } from "../data/strings";

export function replaceNullWithEmptyString(obj) {
    const newObj = {};
    for (let prop in obj) {
        if (obj[prop] === null) {
            newObj[prop] = '';
        } else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

export function unixTimestampToDatetimeLocal(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function getImgURL(filename, type) {
    if (filename === null || filename === undefined || filename === '' || filename === 'null')
        switch (type) {
            case 'logo':
                return defaultLogoURL;
            case 'cover':
                return defaultCoverURL;
            case 'billboard':
                return defaultBillboardImageURL;
        }
    else
        return `https://file-test.cloudprogrammingonline.com/files/${filename}?serverId=1&fileType=IMAGE`;
}
