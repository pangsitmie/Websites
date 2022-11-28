import * as api from './api';

let platformData = null;

//平台版本存取
const set_platform_from_api = async () => {
    try {
        const get = await api.apiGetAllPlatform({
        })
        sessionStorage.setItem('Platform', JSON.stringify(get.data.data))
        console.log(get.data.data)
    }
    catch (error) {
        console.log(error.message)
    } finally {
    }
}

export const refresh_platform = async () => {
    await set_platform_from_api()
    platformData = JSON.parse(sessionStorage.getItem('Platform'))
}

export const get_platform = async () => {
    let data = platformData || JSON.parse(sessionStorage.getItem('Platform'))
    if (data) {
        return data
    } else {
        await set_platform_from_api()
        data = JSON.parse(sessionStorage.getItem('Platform'))
        platformData = data;
        return data
    }
}