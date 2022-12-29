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